package java;

import java.util.HashSet;
import java.util.Scanner;

public class pangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();
        scanner.close();

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        HashSet<Character> characters = new HashSet<>();
        for (char c : input.toLowerCase().toCharArray()) {
            if (Character.isLetter(c)) {
                characters.add(c);
            }
        }

        return characters.size() == 26;
    }
}
