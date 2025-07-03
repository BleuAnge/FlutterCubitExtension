import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

// Utility: Load a template from /templates folder
function loadTemplate(templateName: string): string {
	const templatePath = path.join(__dirname, '..', 'templates', templateName);
	return fs.readFileSync(templatePath, 'utf-8');
}

// Utility: Replace placeholders in template
function renderTemplate(template: string, variables: Record<string, string>): string {
	return template.replace(/{{(.*?)}}/g, (_, key) => variables[key.trim()] || '');
}

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('customCubit.createCubit', async (uri: vscode.Uri) => {
    const cubitName = await vscode.window.showInputBox({ prompt: 'Enter Cubit Name (e.g., Product)' });
    if (!cubitName) {return;}

    const folderPath = uri.fsPath;
    const featureFolderPath = path.join(folderPath, "cubit");

    // Create subfolder if it doesn't exist
    if (!fs.existsSync(featureFolderPath)) {
      fs.mkdirSync(featureFolderPath);
    }

    // Load templates
    const cubitTemplate = loadTemplate('cubit.tpl');
    const stateTemplate = loadTemplate('state.tpl');
    const widgetTemplate = loadTemplate('logic.tpl');

    // Render templates with actual Cubit name
    const cubitContent = renderTemplate(cubitTemplate, { name: cubitName });
    const stateContent = renderTemplate(stateTemplate, {
		name: cubitName,
    });
    const widgetContent = renderTemplate(widgetTemplate, { name: cubitName });

    // Write files
    fs.writeFileSync(path.join(featureFolderPath, "cubit.dart"), cubitContent);
    fs.writeFileSync(path.join(featureFolderPath, "state.dart"), stateContent);
    fs.writeFileSync(path.join(featureFolderPath, "logic.dart"), widgetContent);

    vscode.window.showInformationMessage(`Cubit "${cubitName}" created successfully!`);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
