---
title: "Интересный софт и библиотеки"
---

# Набор программ и библиотек, которые показались мне интересными

Поытка записать софт, на развитие которого хочется поглядывать или же нужно раз
в сто лет его запустить и никогда не можешь запомнить, что использовать.

## Тулинг

- [mise-en-place](https://mise.jdx.dev/lang/rust.html) менеджер версий языков программирования + переменных среды + туллинга
- [ImHex](https://imhex.werwolv.net/) [опенсорсный](https://github.com/WerWolv/ImHex) HEX-редактор
- [nvim.hex](https://github.com/RaafatTurki/hex.nvim) просто плагин к neovim для использования как hex-редактора через xxd,
  но он настолько хорош, что я его отдельно сюда запишу, чтобы не забыть
- [MailPit](https://mailpit.axllent.org/) для тестирования отправки имейлов, заместо устаревшего MailHog'a, или же нодовского [Maildev](https://github.com/maildev/maildev)
- [Tokei](https://github.com/XAMPPRocky/tokei) TUI подсчёт строчек кода
- [Bandwhich](https://github.com/imsnif/bandwhich) консольный анализатор сетевого трафика
- [xh](https://github.com/ducaale/xh) удобный HTTP-клиент с опциональной трансляцией комманд в cURL
- [hurl](https://github.com/Orange-OpenSource/hurl) HTTP-client работающий по текстовым файлам (а-ля [httpYac](https://httpyac.github.io/))
- [difftastic](https://difftastic.wilfred.me.uk/) семантический диффер
- [lazygit](https://github.com/jesseduffield/lazygit), [lazydocker](https://github.com/jesseduffield/lazydocker), [lazyvim](https://www.lazyvim.org/)
- [knip](https://knip.dev/) анализатор мертвого кода для тайпскрипта

### Консольные проводники

- [Yazi](https://github.com/sxyazi/yazi)
- [Broot](https://dystroy.org/broot/) -- рассматривал его когда-то, но теперь однозначно на yazi

### Хорошие консольные альтернативы для родных юниксовых команд

- [bat](https://github.com/sharkdp/bat) cat/less с подсветкой синтаксиса
- [delta](https://github.com/dandavison/delta) диффер с базирующийся на bat
- [fzf](https://github.com/junegunn/fzf) Нечёткий поиск файлов.
  Помимо непосредственно поиска файлов, может также применяться в качестве общего
  поиска и выбора с выполнением действий из вывода другой программы, например выбор веток в гите для удаления:

```sh
git branch --format="%(refname:short)" | fzf -m --bind 'enter:become(git branch -D {+})'
```

выбор веток осуществляется через Tab, Enter удалит выбранные ветки

- [fd](https://github.com/sharkdp/fd) Более удобный find
- [eza](https://github.com/eza-community/eza) Красивенький ls
- [zoxide](https://github.com/ajeetdsouza/zoxide) cd с фуззи-поиском, абсолютно великолепная вещь
- [atuin](https://atuin.sh/) История консоли (только юникс)
- [tealdeer](https://github.com/tealdeer-rs/tealdeer) tldr для man-страниц
- [dysk](https://github.com/Canop/dysk) удобный просмотрщик доступного пространства в консоле
- [Dust](https://github.com/bootandy/dust) TUI анализатор используемого диского просранства
- [Bottom](https://github.com/ClementTsang/bottom) консольный анализатор потребляемых компьютером ресурсов
- [glow](https://github.com/charmbracelet/glow) читалка маркдаунов на bubble-tea
- [jless](https://jless.io/) просмотрщик JSON-файлов в консоли
- [caligula](https://github.com/ifd3f/caligula) TUI-прожигалка USB-образов

### Прочее

- [ratatui](https://ratatui.rs/) TUI-фреймворк для раста
- [Bubble Tea](https://github.com/charmbracelet/bubbletea) TUI-фреймворк для го.
  к нему же:
  - великолепный враппер для шел-скриптов: [gum](https://github.com/charmbracelet/gum) (активно используется в Omarchy)
  - библиотека компонентов [bubbles](https://github.com/charmbracelet/bubbles)
  - удобная библиотека для создания форм: [huh](https://github.com/charmbracelet/huh)
