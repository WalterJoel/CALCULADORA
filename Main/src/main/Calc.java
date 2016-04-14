package main;

import java.util.HashMap;
import java.util.Map;

public class Calc {
    Map<String, Operation> operations;
    public Calc() {
        operations = new HashMap<String, Operation>();
        register("+", new Sum());
        register("-", new Substraction());
        register("*", new Multiplication());
        register("/", new Division());
        register("@", new Arroba());
    }

    public void register(String operator, Operation operation) {
        operations.put(operator, operation);
    }

    public Double operate(String operator, Double a, Double b) {
        Operation operation = operations.get(operator);
        return operation.operate(a, b);
    }
}

abstract class Operation {
    public abstract Double operate(Double a, Double b);
}

class Sum extends Operation {
    public Double operate(Double a, Double b) {
        return a + b;
    }
}

class Substraction extends Operation {
    public Double operate(Double a, Double b) {
        return a - b;
    }
}

class Multiplication extends Operation {
    public Double operate(Double a, Double b) {
        return a * b;
    }
}

class Division extends Operation {
    public Double operate(Double a, Double b) {
        return a / b;
    }
}
class Arroba extends Operation {
    public Double operate(Double a, Double b){
        return (b*(a-2))/(a+b);
    }
}