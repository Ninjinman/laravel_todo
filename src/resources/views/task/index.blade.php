<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ToDo管理アプリ</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <header>
        <h1 class="logo">ToDo管理アプリ</h1>
    </header>
    <main>
        <form action="/tasks" method="post">
            @csrf
            <input class="task-input" type="text" name="task" placeholder="タスクを入力">
            <button class="submit-button" type="submit">登録</button>
        </form>
        <!-- ここにタスク一覧を表示する -->
    </main>
    <footer class="footer">
        <!-- フッターナビゲーションバーの内容 -->
    </footer>
</body>
</html>
