import java.util.Random;
import java.util.Scanner;

public class NumberGuessGame {

    public static void main(String[] args) {
        // 1. ゲームの準備
        Random random = new Random();
        Scanner scanner = new Scanner(System.in);

        int answer = random.nextInt(100) + 1; // 1から100までの乱数を生成
        int attempts = 0; // 試行回数をカウントする変数
        int guess = 0; // ユーザーの推測を格納する変数

        System.out.println("数当てゲームへようこそ！");
        System.out.println("1から100までの数字を当ててください。");

        // 2. ゲームのメインループ
        while (guess != answer) {
            System.out.print("あなたの推測: ");
            
            // ユーザーが数字以外を入力した場合のエラー処理
            try {
                guess = scanner.nextInt();
                attempts++; // 試行回数を1増やす

                // 3. 推測の判定
                if (guess < answer) {
                    System.out.println("ヒント: もっと大きい数字です。");
                } else if (guess > answer) {
                    System.out.println("ヒント: もっと小さい数字です。");
                } else {
                    System.out.println("おめでとう！正解です！");
                    System.out.println(attempts + "回で当てました。");
                }
            } catch (java.util.InputMismatchException e) {
                System.out.println("エラー: 数字を入力してください。");
                scanner.next(); // 不正な入力をクリア
            }
        }

        // 4. ゲーム終了後の処理
        scanner.close(); // Scannerを閉じる
        System.out.println("ゲームを終了します。");
    }
}
