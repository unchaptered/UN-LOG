[< Go Backs](../README.md)

# Rabase Strategy

- [An introduction to Git merge and rebase: what they are, and how to use them](https://www.freecodecamp.org/news/an-introduction-to-git-merge-and-rebase-what-they-are-and-how-to-use-them-131b863785f/)

## Test

- [x] Basic Rebase with Single Commit [Click](./GIT_STRATEGY.md#basic-rebase-with-single-commit)
- [x] Basic Rebase with Mutliple Commits [Click](./GIT_STRATEGY.md#basic-rebase-with-mutliple-commits)

### Basic Rebase with Single Commit

> Before rebase, I have 1 of new commit in `sample/rebase`. <br>
> After rebase, I have 1 commit! <br>
> This method don't create Unsuable PR Commit!

- Command

```cmd
git checkout -b sample/rebase
git add docs/SAMPLE.md
git commit -m 'Create ~docs/SAMPLE.md to test rebase'
git checkout main
git rebase sample/rebase
git push origin main
```

- Result (Detail)

```cmd
commit 75dde864f96b592a12e46e20ce1ff7355d7a4e36
Author: Unchaptered <email@email.com>
Date:   Thu Oct 6 23:17:46 2022 TIMEZONE

    Create ~docs/SAMPLE.md to test rebase
```

### Basic Rebase with Mutliple Commits

> Before rebase, I have 2 of new commit in `sample/rebase`. <br>
> After rebase, I have 1 commit! <br>
> This method don't create Unsuable PR Commit!

- Command

```cmd
git checkout -b sample/rebase
git add docs/SAMPLE_2.md
git commit -m 'Create ~docs/SAMPLE_2.md to test rebase'
git add docs/SAMPLE_3.md
git commit -m 'Create ~docs/SAMPLE_3.md to test rebase'
git checkout main
git rebase sample/rebase
git push origin main
```

- Result (Detail)

```
commit 1ba8cabe7b56f4335d3ff35aa30db0e4348407a9 (HEAD -> main, origin/main, sample/rebase)
Author: Unchaptered <email@email.com>
Date:   Thu Oct 6 23:20:25 2022 +TIMEZONE

    Create ~docs/SAMPLE_3.md to test rebase

commit 4c9137633421d2212c167c456a067b84775c79a3
Author: Unchaptered <email@email.com>
Date:   Thu Oct 6 23:20:18 2022 +TIMEZONE

    Create ~docs/SAMPLE_2.md to test rebase
```
