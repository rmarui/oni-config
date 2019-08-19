
import * as React from "react"
import * as Oni from "oni-api"

export const activate = (oni: Oni.Plugin.Api) => {
    console.log("config activated")

    // Input
    //
    // Add input bindings here:
    //
    oni.input.bind("<c-enter>", () => console.log("Control+Enter was pressed"))

    oni.editors.activeEditor.neovim.command("nnoremap j gj")
    oni.editors.activeEditor.neovim.command("nnoremap k gk")

    oni.editors.activeEditor.neovim.command("nmap go <Plug>(grammarous-open-info-window)")
    oni.editors.activeEditor.neovim.command("nmap gc <Plug>(grammarous-close-info-window)")
    oni.editors.activeEditor.neovim.command("nmap gw <Plug>(grammarous-move-to-info-window)")
    oni.editors.activeEditor.neovim.command("nmap gf <Plug>(grammarous-fixit)")
    oni.editors.activeEditor.neovim.command("nmap gr <Plug>(grammarous-remove-error)")
    oni.editors.activeEditor.neovim.command("nmap gn <Plug>(grammarous-move-to-next-error)")
    oni.editors.activeEditor.neovim.command("nmap gp <Plug>(grammarous-move-to-previous-error)")

    oni.editors.activeEditor.neovim.command("set tabstop=2")
    oni.editors.activeEditor.neovim.command("set shiftwidth=2")
    oni.editors.activeEditor.neovim.command("set softtabstop=2")
    oni.editors.activeEditor.neovim.command("set expandtab=2")
    //
    // Or remove the default bindings here by uncommenting the below line:
    //
    // oni.input.unbind("<c-p>")

}

export const deactivate = (oni: Oni.Plugin.Api) => {
    console.log("config deactivated")
}

export const configuration = {
    //add custom config here, such as

    "ui.colorscheme": "hybrid_dark",

    "oni.useDefaultConfig": true,
    //"oni.bookmarks": ["~/Documents"],
    "oni.loadInitVim": false,
    "editor.fontSize": "16px",
    //"editor.fontFamily": "InconsolataGo Nerd Font Mono",
    "editor.fontFamily": "Ricty Discord Nerd Font",

    // UI customizations
    "oni.hideMenu": true,
    "ui.animations.enabled": true,
    "ui.fontSmoothing": "auto",
    "sidebar.enabled": false,
    //"statusbar.enabled": false,
    "autoClosingPairs.enabled": false,
    "sidebar.default.open": false,
}
