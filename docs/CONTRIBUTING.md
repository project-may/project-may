# project-may Contribution Guidelines

This provides a guide and overview of the contribution workflow for **project-may**,
ranging from opening an issue, creating a PR, reviewing PRs, and merging the PR.

## New Contributors

To get an overview of the project, read the [README](../README.md).
Here are some resources to help you get started with contributions:

-   [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
-   [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
-   [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

## Contribution Workflow

### Create a new issue

Before creating a new issue,
[check if the issue already exists](https://github.com/project-may/project-may/issues).
Create a new issue if it does not, and provide a brief description of what needs to be done as well as any relevant resources.
If you are a part of the **project-may Organization**, you may also add the issue to the relevant project board with a
corresponding **Priority** and **Size**. Issues may be left unassigned for others to pick up as needed.

### Solve an issue

Scan through the [existing issues](https://github.com/project-may/project-may/issues) to find one that interests you.
As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to self-assign
and open a PR with a fix.

#### Create a new branch

For ease-of-use, select **Create a branch** in the right sidebar of the issue if one is not already created, and work on the changes addressing the issue in that branch.

#### Commit your update

Commit the changes once you are happy with them. Your changes should address the specifications described in the issue.

#### Creating Pull Requests

When you're finished with the changes, create a pull request, also known as a PR.

1. [Check if the PR already exists for the branch](https://github.com/project-may/project-may/pulls) and create a new pull request if it does not.
2. In your pull request, provide a **detailed description** of the changes you've made, the functionality it provides, and/or the issues you resolve.
3. For **Assignees**, select those who are involved with the changes and the branch.
4. For **Reviewers**, select at least two external contributors. Your PR requires **at least 2 approvals** in order to be merged.
5. Ensure that your pull request pass all given checks. If not, make subsequent changes to address them.
    - Use `npm run lint` locally to check for linting issues
    - Use `npm run test` locally to run test cases
6. When able, you may merge your PR. If needed, you may **Squash and Merge** if your branch has a more messier commit history.

#### Reviewing Pull Requests

Please take the time to review other's PRs. You may self-assign as necessary to PRs that need reviewers.
Answer these questions as you conduct your review:

1. Are the quality of the changes sufficient?
2. Do the changes address the specifications of the issue?
3. Is there anything that can be improved upon?
4. Do the changes allow for any subsequent issues that may come up?

In addressing any of the above concerns, you may also contribute to the PR and make changes if necessary.

#### Your PR is merged!

Great job! Thank you for your contribution. :)
