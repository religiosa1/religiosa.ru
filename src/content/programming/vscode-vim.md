---
title: "Настройка режима vim в vscode"
---

Настроил приемлемый для меня режим vim'а в вскоде.

Есть два популярных расширения:

- [VSCode Neovim asvetliakov.vscode-neovim](https://marketplace.visualstudio.com/items?itemName=asvetliakov.vscode-neovim)
- [Vim vscodevim.vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)

Первое по идее отдаёт обработку настоящему инстансу neovim, но с моими
настройками и плагинами оно отказывается работать по нормальному, поэтому я
решил просто пользоваться вторым -- которое чистый эмулятор.

Никаких планинов и не всегда на 100% соответсвует поведению настоящего vim'а,
но достаточно близко для меня и **относительно** безгеморойно.

Чтобы приблизить опыт использования к моим настройкам, мне понадобилось два
дополниительных расширения:

- [Flash Nvim for VSCode](https://marketplace.visualstudio.com/items?itemName=souravahmed.flash-vscode-latest)
  эмулирует работу flash.nvim
- [Toggle Relative Line Numbers](https://marketplace.visualstudio.com/items?itemName=habibium.toggle-relative-line-numbers)
  для включения/выключения относительных номеров строк

Всё это дело не так чтобы работает из коробки как моя конфигурация lazyvim,
поэтому надо немного поконфижить.

Основная конфигурация:

```jsonc
{
  "vim.leader": "<space>",
  "vim.handleKeys": {
    // разрешаем обработку ctrl+w, потомму что это уже на подкорках
    "<C-w>": false
  },
  // вставка и удаление без копирования в регистр в визуальном режме
  "vim.visualModeKeyBindingsNonRecursive": [
    {
      // In visual mode, delete WITHOUT putting content into clipboard register
      "before": ["leader", "d"],
      "after": ["\"", "_", "d"]
    },
    {
      // In visual mode, paste over WITHOUT putting content under cursor into clipboard register
      "before": ["leader", "p"],
      "after": ["p", "g", "v", "y"]
    }
  ],
  "vim.normalModeKeyBindingsNonRecursive": [
    // vscode vim extension conflicts on space leader with space motions, remapping them back
    // This will conflict with the default mapping of camel-case motions, so better to just use
    // r and x correspondingly
    // {
    //   "before": ["c", "<Leader>"],
    //   "after": ["c", "l"]
    // },
    // {
    //   "before": ["d", "<Leader>"],
    //   "after": ["d", "l"]
    // },
    // scroll and center
    {
      "before": ["<C-d>"],
      "after": ["<C-d>", "z", "z"]
    },
    {
      "before": ["<C-u>"],
      "after": ["<C-u>", "z", "z"]
    },
    // Flash-vscode keybindings
    {
      "before": ["s"],
      "commands": ["flash-vscode.start"]
    },
    {
      "before": ["S"],
      "commands": ["flash-vscode.startSelection"]
    },
    {
      "before": ["<BS>"],
      "commands": ["flash-vscode.backspace"]
    },
    // Some leader settings for consistency with lazyvim
    {
      "before": ["<leader>", "<space>"],
      "commands": ["workbench.action.quickOpen"]
    },
    {
      "before": ["<leader>", "c", "r"],
      "commands": ["editor.action.rename"]
    },
    {
      "before": ["<leader>", "s", "r"],
      "commands": ["workbench.action.findInFiles"]
    },
    {
      "before": ["<leader>", "e"],
      "commands": ["workbench.files.action.focusFilesExplorer"]
    },
    {
      "before": ["<leader>", "g", "g"],
      "commands": ["workbench.view.scm"]
    },
    {
      "before": ["<leader>", "b", "d"],
      "commands": ["workbench.action.closeActiveEditor"]
    }
  ],
  "vim.useSystemClipboard": true,
  "vim.camelCaseMotion.enable": true,
  "vim.highlightedyank.enable": true,
  "vim.highlightedyank.color": "#ff966c",
  "vim.highlightedyank.textColor": "#1b1d2b",
  "editor.lineNumbers": "relative"
}
```

Дополнительно, сочетания клавиш:

```jsonc
{
  // FilesExplorer settings
  {
    "key": "ctrl+h",
    "command": "workbench.action.navigateLeft",
    "when": "vim.active && vim.mode != 'Insert'"
  },
  {
    "key": "ctrl+j",
    "command": "workbench.action.navigateDown",
    "when": "vim.active && vim.mode != 'Insert'"
  },
  {
    "key": "ctrl+k",
    "command": "workbench.action.navigateUp",
    "when": "vim.active && vim.mode != 'Insert'"
  },
  {
    "key": "ctrl+l",
    "command": "workbench.action.navigateRight",
    "when": "vim.active && vim.mode != 'Insert'"
  },
  // couple of extra settings, for file view to be in line with yazi
  {
    "key": "c",
    "command": "copyRelativeFilePath",
    "when": "filesExplorerFocus && !inputFocus"
  }
}
```
