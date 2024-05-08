# cashbook

## 🙌 介绍

这是一个简洁的记账网站

## 📖 功能介绍


自动计算余额

自动计算总收入

自动计算总支出

分类过滤收入和支出单独列表显示

## 📖 使用说明

#### 添加数据：

在左侧卡片即可进行添加，默认是收入，在数据前添加 - 则为支出金额

Text为描述，Money为金额

| 字段      | 类型          |
| ----------- | ----------- |
| Text       | String      |
| Money      | Number      |

#### 删除数据：

单个删除：点击数据卡片右侧 x 即可删除当前的数据

全部删除：点击右上方的 卍 即可删除全部数据

#### 修改数据：

双击数据卡片的左侧的文字描述即可修改当前数据，按回车即可保存

<font color=red> 注意：目前仅支持修改文字描述，如果需要修改金额可删除当前项重新添加</font>

进行修改时文本内容不可为空!!!


#### 搜索数据：

在搜索框中输入想要寻找的Text内容即可搜索数据

## 💻 技术栈

vue2、vuex、vue-router

## 克隆到本地

```
git clone https://github.com/abindsoul/cashbook.git
```
## 依赖安装

```
npm install
```


## 🔨 本地运行

```
npm run serve
```

## 📦 项目打包

```
npm run build
```

## 🤝 感谢

感谢 [vue2](https://v2.cn.vuejs.org/v2/api/) 提供的框架

感谢 [charge-up](https://github.com/cuixiaorui/charge-up) 提供的UI参考

感谢 [我自己](https://www.afreesoul.top/) 进行开发嘿嘿嘿

##  喜欢的话可以点个小小的star 😭
