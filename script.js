// 1. ゲームの準備
let answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// 2. HTML要素の取得
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const messageArea = document.getElementById('messageArea');
const attemptsArea = document.getElementById('attemptsArea');

console.log('答え（デバッグ用）: ' + answer); // コンソールに答えを表示

// 3. 「推測する」ボタンが押されたときの処理
guessButton.addEventListener('click', () => {
    // 入力された値を取得し、数値に変換
    let guess = parseInt(guessInput.value);

    // 入力値が有効かチェック
    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageArea.textContent = '1から100までの数字を入力してください。';
        return; // 処理を中断
    }

    attempts++; // 試行回数を増やす

    // 4. 推測の判定
    if (guess < answer) {
        messageArea.textContent = 'ヒント: もっと大きい数字です。';
    } else if (guess > answer) {
        messageArea.textContent = 'ヒント: もっと小さい数字です。';
    } else {
        messageArea.style.color = 'green';
        messageArea.textContent = '🎉 おめでとう！正解です！ 🎉';
        attemptsArea.textContent = attempts + '回で当てました。';
        
        // ゲームクリア後はボタンと入力欄を無効化
        guessButton.disabled = true;
        guessInput.disabled = true;
    }
    
    // 入力欄をクリアする
    guessInput.value = '';
});
