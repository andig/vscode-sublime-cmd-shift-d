import * as vscode from "vscode";

export function duplicateAction(editor: vscode.TextEditor) {
    if (!hasActiveSelection(editor)) {
        vscode.commands.executeCommand("editor.action.copyLinesDownAction");
    } else {
        duplicateWithSelection(editor);
    }
}

function hasActiveSelection(editor: vscode.TextEditor): boolean {
    for (var i = 0; i < editor.selections.length; i++) {
        if (!editor.selections[i].isEmpty) {
            return true;
        }
    }
    return false;
}

function duplicateWithSelection(editor: vscode.TextEditor) {
    var selections = editor.selections; // remember the selection before updating
    editor.edit(edit => {
        selections.forEach(sel => {
            console.log(sel);
            edit.insert(sel.active, editor.document.getText(sel));
        });
    }).then(() => {
        editor.selections = selections.map((sel,i) => {
            return new vscode.Selection(sel.active, editor.selections[i].active);
        });
    })
}
