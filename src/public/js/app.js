// ドラッグされているタスクカードの要素を保存する変数
let draggedTask = null;

// ドラッグ開始時のイベントリスナー
function handleDragStart(event) {
  // ドラッグされているタスクカードの要素を保存
  draggedTask = event.target;
  // タスクカードを半透明にする
  draggedTask.style.opacity = '0.5';
}

// ドラッグ終了時のイベントリスナー
function handleDragEnd(event) {
  // ドラッグされているタスクカードの要素を元に戻す
  draggedTask.style.opacity = '';
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

// ドラッグ中にタスクカードが要素の範囲内に入った際のイベントリスナー
function handleDragEnter(event) {
  // タスクカードの背景色を変更する
  event.target.classList.add('over');
}

// ドラッグ中にタスクカードが要素の範囲内に出た際のイベントリスナー
function handleDragLeave(event) {
  // タスクカードの背景色を元に戻す
  event.target.classList.remove('over');
}

// タスクカードの要素を取得
const taskCards = document.querySelectorAll('.task-card');

// タスクカードの要素にドラッグイベントのイベントリスナーを追加する
taskCards.forEach(taskCard => {
    taskCard.addEventListener('dragstart', handleDragStart);
    taskCard.addEventListener('dragend', handleDragEnd);
    taskCard.addEventListener('dragenter', handleDragEnter);
    taskCard.addEventListener('dragleave', handleDragLeave);
    taskCard.addEventListener('dragover', event => event.preventDefault());
    taskCard.addEventListener('drop', handleDrop);
});
