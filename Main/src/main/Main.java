package main;
public class Main {

    public static void main(String[] args) {
               Calc calc = new Calc();
        System.out.println(calc.operate("+", 3.0, 4.0));
        System.out.println(calc.operate("-", 3.0, 4.0));
        System.out.println(calc.operate("*", 3.0, 4.0));
        System.out.println(calc.operate("/", 3.0, 4.0));
        System.out.println(calc.operate("@", 3.0, 4.0));
    }
    
}
