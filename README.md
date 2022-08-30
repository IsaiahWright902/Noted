# Noted

Built using vite!

1. To Start this app run `npm run dev` after installing dependencies.
2. To Test run `npm run test` (Testing configured for port 8080).

# Create A Note

1. Click 'Add New Note' on the home page.
2. Fill out all required fields.
3. Click 'Add Note!'.

# Edit A Note

1. Hover the note you wish to edit.
2. Click the orange pencil and paper.
3. Make the changes you wish in the input fields.
4. (Optional) if you wish to cancel an edit hit the red x located at the top right while edit inputs are viewable.
5. Click the green check mark at the top right.

# Delete A Note

1. Hover the note you wish to delete.
2. Click the red trashcan.
3. Confirm the dialogue.

# Mark Note Completed

1. Simply double click the note you wish to mark complete. This will make it uneditable. If you wish to edit a completed noted double click it again to un-mark it complete.

# Deployment

1. In the Vite config folder add `base:GithubRepoName/`

2. Run `npm run build` to build static files to the dist folder.

3. Run `git add dist -f`

4. Run `git commit -m 'adding dist`

5. Finally run `git subtree push --prefix dist origin gh-pages` Now the dist folder is pushed to its own branch

6. Go to the dist branch and deploy with github pages :)
