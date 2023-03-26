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
        <h1 class="title">タスク一覧</h1>
        <form action="/tasks" method="post">
            @csrf
            <input class="task-input" type="text" name="task" placeholder="タスクを入力">
            <input class="task-input" type="text" name="description" placeholder="詳細">
            <button class="submit-button" type="submit">登録</button>
        </form>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>タスク名</th>
                    <th>詳細</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($tasks as $task)
                    <tr>
                        <td>{{ $task->id }}</td>
                        <td>{{ $task->title }}</td>
                        <td>{{ $task->description }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </main>
    <footer class="footer">
        <!-- フッターナビゲーションバーの内容 -->
    </footer>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
