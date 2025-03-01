---
title: "Пакетная обработка файлов"
---

В винде есть специальная команда для рекурсивного прохода по файлам:

```shell
forfiles /S /M "*.mp3" /C "cmd /C lame --decode @FILE - | opusenc -  @FNAME.opus"
```

```
    /s — рекурсивно
    /m — задаёт маску (в данном случае "*.mp3")
    /c — выполнить команду
```

Альтернативно используя PowerShell:

```ps
Get-ChildItem -Recurse -Filter "*.mp3" | ForEach-Object {
    & lame --decode "$($_.FullName)" - | opusenc - "$($_.Directory.FullName)\$($_.BaseName).opus"
}
```

### Удаление всех node_modules рекурсивно.

#### В UNIX:

```bash
find . -type d -name "node_modules" -exec rm -rf {} +
```

Или используя fd:

```ps
fd -u --prune  node_modules -X rm -r
```

#### В винде/powershell:

```ps
Get-ChildItem -Recurse -Directory -Filter node_modules | Remove-Item -Recurse -Force
```

##### fd в винде работать не будет

`rm` в Powershell не бинарник, а встроенная команда оболочки, `fd` такое
вызывать не умеет. Из этого можно выкрутиться и вызывая через `cmd /c` `rd`
вместо `rm`. `rd` требует полный путь до файла -- флаг `-a` у fd.

```ps
fd -u --prune -a node_module -X cmd.exe  /c rd /s /q
```

Вероятно, проще уже дождаться решение
[вот этого вопроса](https://github.com/sharkdp/fd/issues/1406) в fd, чтобы иметь
кроссплатформенный вариант.
