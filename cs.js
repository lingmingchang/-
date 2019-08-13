//只是用来测试Git命令的

// 1、创建一个文件夹 zs-spot
// 2、把文件夹 zs-spot 变成Git可以管理的仓库：在文件夹目录下执行 git init
// 3、在 zs-spot 文件夹下创建文件（比如 readme.txt）然后执行：git add 文件（比如readme.txt）注意：git add 是可以多次重复执行的（添加不同的文件）也可以 git add . 添加所有新建的文件
// 4、git commit-m "这里写提交的说明，很重的"（）这是提交到本地仓库
// 5、git status 可以告诉你有文件被修改过
// 6、git diff 可以查看修改的内容：git diff readme.txt


// git init 把本地文件夹初始化为git可管理的仓库
// git add 把文件内容添加到暂存区（git status可以查看)
// git status 可以查看目录和暂存区的状态（看下有没有改的）
// git diff 显示修改记录
// git log  查看提交记录
// git reset 版本回退 git reset --hard head^ (这里要注意的是上一个版本就是HEAD^) || git reset --hard 版本号（版本号可以通过log查看）
// git rm file  在版本库里删除文件