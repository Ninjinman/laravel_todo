// ドラッグされているタスクカードの要素を保存する変数
let draggedTask = null;

// ドラッグ開始時のイベントリスナー
function handleDragStart(event) {
  // ドラッグされているタスクカードの要素を保存
  draggedTask = event.target;
  // タスクカードの要素にドラッグ中であることを示すスタイルを適用
  draggedTask.classList.add('dragging');
}

// ドラッグ終了時のイベントリスナー
function handleDragEnd(event) {
  // ドラッグされているタスクカードの要素を元に戻す
  draggedTask.classList.remove('dragging');
  draggedTask = null;
}

// ドロップ時のイベントリスナー
function handleDrop(event) {
  // ドラッグされたタスクカードの要素を取得
  const sourceTask = draggedTask;
  // ドロップ先のタスクカードの要素を取得
  const targetTask = event.target.closest('.task-card');
  // ドロップ先のタスクカードの位置を取得
  const targetIndex = Array.from(targetTask.parentNode.children).indexOf(targetTask);
  // ドラッグされたタスクカードの位置を取得
  const sourceIndex = Array.from(sourceTask.parentNode.children).indexOf(sourceTask);

  // ドロップ先のタスクカードの位置がドラッグされたタスクカードの位置よりも前の場合
  if (targetIndex < sourceIndex) {
    // ドロップ先のタスクカードの前にドラッグされたタスクカードを挿入する
    targetTask.parentNode.insertBefore(sourceTask, targetTask);
  }
  // ドロップ先のタスクカードの位置がドラッグされたタスクカードの位置よりも後の場合
  else {
    // ドロップ先のタスクカードの後にドラッグされたタスクカードを挿入する
    targetTask.parentNode.insertBefore(sourceTask, targetTask.nextSibling);
  }
}

// タスクカードの要素を取得
const taskCards = document.querySelectorAll('.task-card');

// タスクカードの要素にドラッグイベントのイベントリスナーを追加する
taskCards.forEach(taskCard => {
    taskCard.addEventListener('dragstart', handleDragStart);
    taskCard.addEventListener('dragend', handleDragEnd);
    taskCard.addEventListener('dragover', event => event.preventDefault());
    taskCard.addEventListener('drop', handleDrop);
});
