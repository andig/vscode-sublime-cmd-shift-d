import * as vscode from 'vscode';
import { duplicateAction } from './actions';


export async function activate(context: vscode.ExtensionContext): Promise<void> {
    context.subscriptions.push(vscode.commands.registerTextEditorCommand("extension.duplicate", duplicateAction));
}