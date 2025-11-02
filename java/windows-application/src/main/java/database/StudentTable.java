package database;

import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLIntegrityConstraintViolationException;
import java.sql.Statement;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JTextField;
import io.github.cdimascio.dotenv.Dotenv;

public class StudentTable extends WindowAdapter implements ActionListener {

    public JFrame f;
    public JLabel l1, l2, l3, l4;
    public JTextField tf1, tf2, tf3, tf4;
    public JButton b1, b2, b3, b4, b5;
    public Connection con;

    StudentTable() {
        Dotenv env = Dotenv.configure().ignoreIfMissing().load();

        f = new JFrame("Student Table");

        Font f1 = new Font("Book Antiqua", Font.PLAIN, 16);

        l1 = new JLabel("Student ID:");
        l1.setFont(f1);
        l1.setBounds(110, 60, 150, 30);

        tf1 = new JTextField();
        tf1.setFont(f1);
        tf1.setBounds(270, 60, 220, 30);

        l2 = new JLabel("Student Name:");
        l2.setFont(f1);
        l2.setBounds(110, 120, 150, 30);

        tf2 = new JTextField();
        tf2.setFont(f1);
        tf2.setBounds(270, 120, 220, 30);

        l3 = new JLabel("Student Gender:");
        l3.setFont(f1);
        l3.setBounds(110, 180, 150, 30);

        tf3 = new JTextField();
        tf3.setFont(f1);
        tf3.setBounds(270, 180, 220, 30);

        l4 = new JLabel("Student Age:");
        l4.setFont(f1);
        l4.setBounds(110, 240, 150, 30);

        tf4 = new JTextField();
        tf4.setFont(f1);
        tf4.setBounds(270, 240, 220, 30);

        b1 = new JButton("Insert");
        b1.setFont(f1);
        b1.setBounds(60, 310, 80, 30);

        b2 = new JButton("Update");
        b2.setFont(f1);
        b2.setBounds(160, 310, 80, 30);

        b3 = new JButton("Delete");
        b3.setFont(f1);
        b3.setBounds(260, 310, 80, 30);

        b4 = new JButton("Select");
        b4.setFont(f1);
        b4.setBounds(360, 310, 80, 30);

        b5 = new JButton("View");
        b5.setFont(f1);
        b5.setBounds(460, 310, 80, 30);

        f.add(l1);
        f.add(tf1);

        f.add(l2);
        f.add(tf2);

        f.add(l3);
        f.add(tf3);

        f.add(l4);
        f.add(tf4);

        f.add(b1);
        f.add(b2);
        f.add(b3);
        f.add(b4);
        f.add(b5);

        b1.addActionListener(this);
        b2.addActionListener(this);
        b3.addActionListener(this);
        b4.addActionListener(this);
        b5.addActionListener(this);

        f.setSize(600, 400);
        f.setLayout(null);
        f.setVisible(true);
        f.addWindowListener(this);

        try {
            Class.forName("org.postgresql.Driver");
            con = DriverManager.getConnection(env.get("DB_URL"), env.get("DB_USER"),
                    env.get("DB_PASSWORD"));

            System.out.println("Connected to the PostgreSQL server successfully.");

            // Create student table
            String createStudentTableQuery =
                    "CREATE TABLE IF NOT EXISTS student (student_id INT PRIMARY KEY, student_name VARCHAR(100), gender VARCHAR(10), age INT)";

            Statement st = con.createStatement();
            st.execute(createStudentTableQuery);

            System.out.println("Student table created successfully.");
        } catch (Exception e1) {
            JOptionPane.showMessageDialog(f, e1.getMessage());
        }
    }

    public void actionPerformed(ActionEvent e) {

        if (e.getSource() == b1) {
            try {
                String query =
                        "Insert into student(student_id, student_name, gender, age) values(?, ?, ?, ?)";

                PreparedStatement pst = con.prepareStatement(query);

                pst.setInt(1, Integer.parseInt(tf1.getText()));
                pst.setString(2, tf2.getText());
                pst.setString(3, tf3.getText());
                pst.setInt(4, Integer.parseInt(tf4.getText()));

                int rows = pst.executeUpdate();

                JOptionPane.showMessageDialog(f, "" + rows + " row inserted");
            } catch (SQLIntegrityConstraintViolationException icve1) {

                JOptionPane.showMessageDialog(f, "Record already exists", "Warning",
                        JOptionPane.WARNING_MESSAGE);
            } catch (Exception e1) {

                JOptionPane.showMessageDialog(f, e1.getMessage());
            }
        }

        else if (e.getSource() == b2) {
            try {
                String query =
                        "Update student set student_name = ?, gender = ?, age = ? where student_id = ?";

                PreparedStatement pst = con.prepareStatement(query);

                pst.setString(1, tf2.getText());
                pst.setString(2, tf3.getText());
                pst.setInt(3, Integer.parseInt(tf4.getText()));
                pst.setInt(4, Integer.parseInt(tf1.getText()));

                int rows = pst.executeUpdate();

                JOptionPane.showMessageDialog(f, "" + rows + " row updated");
            } catch (Exception e1) {

                JOptionPane.showMessageDialog(f, e1.getMessage());
            }
        }

        else if (e.getSource() == b3) {
            try {
                Statement st = con.createStatement();

                String query = "Delete from student where student_id = " + tf1.getText();

                int rows = st.executeUpdate(query);

                JOptionPane.showMessageDialog(f, "" + rows + " row deleted");
            } catch (Exception e1) {

                JOptionPane.showMessageDialog(f, e1.getMessage());
            }
        }

        else if (e.getSource() == b4) {
            try {
                Statement st = con.createStatement();

                String query = "Select * from student where student_id = " + tf1.getText();

                ResultSet rs = st.executeQuery(query);

                if (rs.next()) {

                    tf2.setText(rs.getString(2));
                    tf3.setText(rs.getString(3));
                    tf4.setText("" + rs.getInt(4));
                    JOptionPane.showMessageDialog(f, "Selected");
                } else {
                    JOptionPane.showMessageDialog(f, "Record not found");
                }
            } catch (Exception e1) {

                JOptionPane.showMessageDialog(f, e1.getMessage());
            }
        }

        else if (e.getSource() == b5) {
            try {
                Statement st = con.createStatement();

                String query = "Select * from student";

                ResultSet rs = st.executeQuery(query);

                while (rs.next()) {

                    tf1.setText("" + rs.getInt(1));
                    tf2.setText(rs.getString(2));
                    tf3.setText(rs.getString(3));
                    tf4.setText("" + rs.getInt(4));

                    JOptionPane.showMessageDialog(f, "Next");
                }

                JOptionPane.showMessageDialog(f, "Finished");
            } catch (Exception e1) {

                JOptionPane.showMessageDialog(f, e1.getMessage());
            }
        }
    }

    public void windowClosing(WindowEvent e) {
        try {
            con.close();
        } catch (Exception e1) {
            JOptionPane.showMessageDialog(f, e1.getMessage());
        }
    }

    public static void main(String[] args) {
        new StudentTable();
    }
}
