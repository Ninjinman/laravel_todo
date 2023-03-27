<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TaskWave</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <header>
        <h1 class="logo">TaskWave</h1>
    </header>
    <main>
        <h1 class="title">タスク一覧</h1>
        <form class="task-form" action="/tasks" method="post">
            @csrf
            <input class="task-input" type="text" name="task" placeholder="タスクを入力">
            <input class="task-input" type="text" name="description" placeholder="詳細">
            <button class="submit-button" type="submit">登録</button>
        </form>
        <div class="task-container">
            @foreach ($tasks as $task)
                <div class="task-card">
                    <h3>{{ $task->title }}</h3>
                    <p>{{ $task->description }}</p>
                    <div class="task-actions">
                        <a href="/tasks/{{ $task->id }}/edit" class="edit-button">編集</a>
                        <form action="/tasks/{{ $task->id }}" method="post" class="delete-form">
                            @csrf
                            @method('DELETE')
                            <button class="delete-button" type="submit">削除</button>
                        </form>
                    </div>
                </div>
            @endforeach
        </div>
    </main>
    <footer class="footer">
        <!-- フッターナビゲーションバーの内容 -->
    </footer>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
