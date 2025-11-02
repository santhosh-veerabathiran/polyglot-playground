package app;

import java.awt.Font;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JTextArea;
import javax.swing.WindowConstants;

public class Notepad extends WindowAdapter implements ActionListener {

    public JFrame f;
    public JMenu filem, editm, formatm, toolsm;
    public JMenuItem mi1, mi2, mi3, mi4, mi5, mi6, mi7, mi8, mi9, mi10, mi11, mi12, mi13, mi14;
    public JTextArea ta1;

    public Notepad() {
        f = new JFrame("Notepad");

        Font f1 = new Font("Book Antiqua", Font.PLAIN, 16);

        JMenuBar mb = new JMenuBar();

        filem = new JMenu("File");
        filem.setFont(f1);

        mi1 = new JMenuItem("New");
        mi1.setFont(f1);
        filem.add(mi1);

        mi2 = new JMenuItem("Open");
        mi2.setFont(f1);
        filem.add(mi2);

        mi3 = new JMenuItem("Save");
        mi3.setFont(f1);
        filem.add(mi3);

        mi4 = new JMenuItem("Exit");
        mi4.setFont(f1);
        filem.add(mi4);

        mb.add(filem);

        editm = new JMenu("Edit");
        editm.setFont(f1);

        mi5 = new JMenuItem("Cut");
        mi5.setFont(f1);
        editm.add(mi5);

        mi6 = new JMenuItem("Copy");
        mi6.setFont(f1);
        editm.add(mi6);

        mi7 = new JMenuItem("Paste");
        mi7.setFont(f1);
        editm.add(mi7);

        mi8 = new JMenuItem("Select All");
        mi8.setFont(f1);
        editm.add(mi8);

        mb.add(editm);

        formatm = new JMenu("Format");
        formatm.setFont(f1);

        mi9 = new JMenuItem("Font");
        mi9.setFont(f1);
        formatm.add(mi9);

        mi10 = new JMenuItem("Color");
        mi10.setFont(f1);
        formatm.add(mi10);

        mb.add(formatm);

        toolsm = new JMenu("Tools");
        toolsm.setFont(f1);

        mi11 = new JMenuItem("Bold");
        mi11.setFont(f1);
        toolsm.add(mi11);

        mi12 = new JMenuItem("Italic");
        mi12.setFont(f1);
        toolsm.add(mi12);

        mi13 = new JMenuItem("Under Line");
        mi13.setFont(f1);
        toolsm.add(mi13);

        mi14 = new JMenuItem("Strike Out");
        mi14.setFont(f1);
        toolsm.add(mi14);

        mb.add(toolsm);

        ta1 = new JTextArea(20, 20);
        ta1.setFont(f1);
        ta1.setBounds(0, 0, 785, 440);

        f.add(ta1);

        mi1.addActionListener(this);
        mi2.addActionListener(this);
        mi3.addActionListener(this);
        mi4.addActionListener(this);
        mi5.addActionListener(this);
        mi6.addActionListener(this);
        mi7.addActionListener(this);
        mi8.addActionListener(this);
        mi9.addActionListener(this);
        mi10.addActionListener(this);
        mi11.addActionListener(this);
        mi12.addActionListener(this);
        mi13.addActionListener(this);
        mi14.addActionListener(this);

        f.setJMenuBar(mb);
        f.setSize(800, 500);
        f.setLayout(null);
        f.setVisible(true);
        f.addWindowListener(this);
        f.setDefaultCloseOperation(WindowConstants.DO_NOTHING_ON_CLOSE);
    }

    public void actionPerformed(ActionEvent e) {

        if (e.getSource() == mi1) {
            ta1.setText("");
        }

        else if (e.getSource() == mi2) {
            JFileChooser fc = new JFileChooser();
            int i = fc.showOpenDialog(f);

            if (i == JFileChooser.APPROVE_OPTION) {
                File file = fc.getSelectedFile();

                try {
                    BufferedReader br = new BufferedReader(new FileReader(file.getPath()));
                    String s1 = "", s2 = "";

                    while ((s1 = br.readLine()) != null) {
                        s2 += s1 + "\n";
                    }
                    ta1.setText(s2);
                    br.close();
                } catch (Exception e1) {

                }
            }
        }

        else if (e.getSource() == mi3) {
            JFileChooser fc = new JFileChooser();
            int i = fc.showSaveDialog(f);

            if (i == JFileChooser.APPROVE_OPTION) {
                File file = fc.getSelectedFile();

                try {
                    BufferedWriter br = new BufferedWriter(new FileWriter(file.getPath()));
                    br.write(ta1.getText());
                    br.close();
                } catch (Exception e1) {

                }
            }
        }

        else if (e.getSource() == mi4) {
            WindowEvent we = new WindowEvent(f, WindowEvent.WINDOW_CLOSING);
            Toolkit.getDefaultToolkit().getSystemEventQueue().postEvent(we);
        }

        else if (e.getSource() == mi5) {
            ta1.cut();
        }

        else if (e.getSource() == mi6) {
            ta1.copy();
        }

        else if (e.getSource() == mi7) {
            ta1.paste();
        }

        else if (e.getSource() == mi8) {
            ta1.selectAll();
        }

        else if (e.getSource() == mi9) {

        }

        else if (e.getSource() == mi10) {

        }

        else if (e.getSource() == mi11) {

        }

        else if (e.getSource() == mi12) {

        }

        else if (e.getSource() == mi13) {

        }

        else if (e.getSource() == mi14) {

        }

    }

    public void windowClosing(WindowEvent e) {
        if ((ta1.getText().equals("")) == false) {

            var res = JOptionPane.showConfirmDialog(f, "Do you want to save changes?", "Notepad",
                    JOptionPane.YES_NO_CANCEL_OPTION);

            if (res == 0) {
                mi3.doClick();
                f.dispose();
            } else if (res == 1) {
                f.dispose();
            }
        }

        else {
            f.dispose();
        }
    }

    public static void main(String[] args) {
        new Notepad();
    }
}
