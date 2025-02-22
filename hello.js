// This is the master branch
// hello.js -> test.js -> readme.md
console.log("Helllo , Git!");
console.log("Hello, GitHub!");
console.log("Hello from dev-sayn");

// Any changes in a file needs to be staged within the master branch
// 1. ADD the change: git add ./ -> adds the changes
// 2. Check the status: git status -> check if the changes are staged 
/* 3. Commit the changes:
        git commit -m "Your message" -> commits the changes
        git push origin master -> pushes the changes to the remote repository
*/

/* There are two types of repositories 1. Local and remote
    Local repository: stored on your computer
    Remote repository: stored on a server
    Git remote add origin <url of your repository> -> connecting local repository to remote server
    Git push -u origin master -> pushes the changes from local to remote repository
    Git pull origin master -> pulls the changes from remote to local repository
*/

/* A upStream branch is a remote branch that your local branch tracks, 
   essentially we are linking a local branch to a remote repository
   you push a local feature-branch to a origin remote branch.
    git push --set-upstream origin feature-branch 
    git push -u origin feature-branch
    both do same task.
    git stash : if a change needs to be temporarily stored then this command is used. 
                This command stores the change and remove from the main branch
    git stash apply <stash-name> : This command adds the stored changes within the branch
*/
