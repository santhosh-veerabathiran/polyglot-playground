package app;

import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JRadioButton;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class BioData implements ActionListener {

    public JFrame f;
    public JLabel l1, l2, l3, l4, l5, l6, l7, l8, l9, l10;
    public JTextField tf1, tf2, tf3, tf4;
    public ButtonGroup bg1, bg2;
    public JRadioButton rb1, rb2, rb3, rb4;
    public JTextField dc1;
    public JComboBox<String> cob1;
    public JCheckBox cb1, cb2, cb3, cb4;
    public JTextArea ta1;
    public JButton b1, b2;

    public BioData() {
        f = new JFrame("Bio Data");

        Font f1 = new Font("Book Antiqua", Font.PLAIN, 16);

        l1 = new JLabel("Name:");
        l1.setFont(f1);
        l1.setBounds(20, 20, 150, 30);

        tf1 = new JTextField();
        tf1.setFont(f1);
        tf1.setBounds(180, 20, 300, 30);

        l2 = new JLabel("Phone Number:");
        l2.setFont(f1);
        l2.setBounds(20, 70, 150, 30);

        tf2 = new JTextField();
        tf2.setFont(f1);
        tf2.setBounds(180, 70, 300, 30);

        l3 = new JLabel("Email Id:");
        l3.setFont(f1);
        l3.setBounds(20, 120, 150, 30);

        tf3 = new JTextField();
        tf3.setFont(f1);
        tf3.setBounds(180, 120, 300, 30);

        l4 = new JLabel("Father's Name:");
        l4.setFont(f1);
        l4.setBounds(20, 170, 150, 30);

        tf4 = new JTextField();
        tf4.setFont(f1);
        tf4.setBounds(180, 170, 300, 30);

        l5 = new JLabel("Gender:");
        l5.setFont(f1);
        l5.setBounds(20, 220, 150, 30);

        rb1 = new JRadioButton("Male", true);
        rb1.setFont(f1);
        rb1.setBounds(180, 220, 100, 30);

        rb2 = new JRadioButton("Female");
        rb2.setFont(f1);
        rb2.setBounds(300, 220, 100, 30);

        bg1 = new ButtonGroup();
        bg1.add(rb1);
        bg1.add(rb2);

        l6 = new JLabel("Date Of Birth:");
        l6.setFont(f1);
        l6.setBounds(20, 270, 150, 30);

        dc1 = new JTextField();
        dc1.setFont(f1);
        dc1.setBounds(180, 270, 300, 30);

        l7 = new JLabel("Marital Status:");
        l7.setFont(f1);
        l7.setBounds(20, 320, 150, 30);

        rb3 = new JRadioButton("Married", true);
        rb3.setFont(f1);
        rb3.setBounds(180, 320, 100, 30);

        rb4 = new JRadioButton("Unmarried");
        rb4.setFont(f1);
        rb4.setBounds(300, 320, 120, 30);

        bg2 = new ButtonGroup();
        bg2.add(rb3);
        bg2.add(rb4);

        l8 = new JLabel("Religion:");
        l8.setFont(f1);
        l8.setBounds(20, 370, 150, 30);

        String[] religions = new String[] {"Christian", "Hindu", "Muslim"};

        cob1 = new JComboBox<String>(religions);
        cob1.setFont(f1);
        cob1.setBounds(180, 370, 300, 30);

        l9 = new JLabel("Languages Known:");
        l9.setFont(f1);
        l9.setBounds(20, 420, 150, 30);

        cb1 = new JCheckBox("Tamil");
        cb1.setFont(f1);
        cb1.setBounds(180, 420, 70, 30);

        cb2 = new JCheckBox("English");
        cb2.setFont(f1);
        cb2.setBounds(250, 420, 80, 30);

        cb3 = new JCheckBox("Hindi");
        cb3.setFont(f1);
        cb3.setBounds(330, 420, 70, 30);

        cb4 = new JCheckBox("Telugu");
        cb4.setFont(f1);
        cb4.setBounds(400, 420, 80, 30);

        l10 = new JLabel("Address:");
        l10.setFont(f1);
        l10.setBounds(20, 470, 150, 30);

        ta1 = new JTextArea();
        ta1.setFont(f1);
        ta1.setBounds(180, 470, 300, 80);

        b1 = new JButton("Submit");
        b1.setFont(f1);
        b1.setBounds(125, 570, 100, 30);

        b2 = new JButton("Cancel");
        b2.setFont(f1);
        b2.setBounds(275, 570, 100, 30);

        f.add(l1);
        f.add(tf1);

        f.add(l2);
        f.add(tf2);

        f.add(l3);
        f.add(tf3);

        f.add(l4);
        f.add(tf4);

        f.add(l5);
        f.add(rb1);
        f.add(rb2);

        f.add(l6);
        f.add(dc1);

        f.add(l7);
        f.add(rb3);
        f.add(rb4);

        f.add(l8);
        f.add(cob1);

        f.add(l9);
        f.add(cb1);
        f.add(cb2);
        f.add(cb3);
        f.add(cb4);

        f.add(l10);
        f.add(ta1);

        f.add(b1);
        f.add(b2);

        b1.addActionListener(this);
        b2.addActionListener(this);

        f.setSize(500, 650);
        f.setLayout(null);
        f.setVisible(true);
    }

    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == b1) {
            String str1 = l1.getText() + "  " + tf1.getText() + "\n";

            str1 += l2.getText() + "  " + tf2.getText() + "\n";

            str1 += l3.getText() + "  " + tf3.getText() + "\n";

            str1 += l4.getText() + "  " + tf4.getText() + "\n";

            str1 += l5.getText() + "  ";

            if (rb1.isSelected()) {
                str1 += rb1.getText() + "\n";
            } else {
                str1 += rb2.getText() + "\n";
            }

            str1 += l6.getText() + "  " + dc1.getText() + "\n";

            str1 += l7.getText() + "  ";

            if (rb3.isSelected()) {
                str1 += rb3.getText() + "\n";
            } else {
                str1 += rb4.getText() + "\n";
            }

            str1 += l8.getText() + "  " + cob1.getSelectedItem() + "\n";

            str1 += l9.getText() + "  ";

            if (cb1.isSelected()) {
                str1 += cb1.getText() + "  ";
            }

            if (cb2.isSelected()) {
                str1 += cb2.getText() + "  ";
            }

            if (cb3.isSelected()) {
                str1 += cb3.getText() + "  ";
            }

            if (cb4.isSelected()) {
                str1 += cb4.getText() + "  ";
            }

            str1 += "\n";

            str1 += l10.getText() + "  " + ta1.getText();

            JOptionPane.showMessageDialog(f, str1, "Bio Data", JOptionPane.INFORMATION_MESSAGE);
        } else if (e.getSource() == b2) {
            tf1.setText("");
            tf2.setText("");
            tf3.setText("");
            tf4.setText("");
            rb1.setSelected(true);
            dc1.setText("");
            rb3.setSelected(true);
            cob1.setSelectedIndex(0);
            cb1.setSelected(false);
            cb2.setSelected(false);
            cb3.setSelected(false);
            cb4.setSelected(false);
            ta1.setText("");
        }
    }

    public static void main(String[] args) {
        new BioData();
    }
}
