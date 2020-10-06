(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{473:function(t,a,r){"use strict";r.r(a);var e=r(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("原文链接 🔗 "),r("a",{attrs:{href:"http://plain-text.co/reproduce-work.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("4 Reproduce Work"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("📚 "),r("a",{attrs:{href:"https://tombener.github.io/archived-blog/posts/2019/11/01/plain-person-text-collection.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("合集｜社会科学的纯文本指南"),r("OutboundLink")],1)]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"错误最小化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#错误最小化"}},[t._v("#")]),t._v(" 错误最小化")]),t._v(" "),r("p",[t._v("我们已经看到了合适的工具集如何通过自动高亮代码来节省时间，确保引用的所有内容都在参考文献中，同时找出语法错误，并为常用方法或功能提供模板。这一过程中，你的时间节省了两次：一是不再自我重复，二是犯了更少的错误。在管理正在进行的项目时，错误最小化意味着解决两个相关问题，首先是在你注意不到的情况下，找到进一步减少错误扩大化的方法，在写代码和分析数据时，这一点尤其重要，其次是找到一种方法来回溯你为得到特定结果所做的工作。使用修订控制系统可以使我们更好地完成这件事，但是在特定的报告或论文方面，还有更多的工作要做。")]),t._v(" "),r("p",[t._v("编写代码时，通常会在运行过程中进行一些分析。你有一些想法，有一些想看的东西，事情总会接踵而来。通常，你应该尝试记录你的工作。如果你正在写 R 脚本，那么这通常意味着在代码中添加（简短但有用）的注释，来解释这一段代码的作用，这有利于增强代码的可读性，在这方面，写代码就像写散文一样，Hadley Wickham 的 "),r("a",{attrs:{href:"https://adv-r.hadley.nz/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("R 风格指南"),r("OutboundLink")],1),t._v(" 提供了一些有关提高代码可读性的指南。R 包 "),r("a",{attrs:{href:"https://github.com/jimhester/lintr",target:"_blank",rel:"noopener noreferrer"}},[t._v("lintr"),r("OutboundLink")],1),t._v(" 可以实现上述这些原则，它就像代码的复制编辑器一样，在 Emacs 中，可以通过 "),r("a",{attrs:{href:"https://github.com/flycheck/flycheck",target:"_blank",rel:"noopener noreferrer"}},[t._v("flycheck"),r("OutboundLink")],1),t._v(" 工具自动使用 "),r("code",[t._v("lintr")]),t._v("。")]),t._v(" "),r("p",[t._v("编写代码过程中也应该尽量不要自我重复。一个有用的建议是，如果你发现自己在复制并粘贴代码块（例如，绘制相同类型的绘图或为一堆不同的变量运行相同类型的模型），那么你应该停下来看看是否可以写一个快速的便利功能，来更有效地实现自动化。这样，你的代码可以更短，并且不容易出现因为多次复制粘贴而导致的错误和不一致。")]),t._v(" "),r("h2",{attrs:{id:"从服务器到数据表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#从服务器到数据表"}},[t._v("#")]),t._v(" 从服务器到数据表")]),t._v(" "),r("p",[t._v("数据分析中的错误，通常远远超过在论文中生成图片或表格和随后使用该输出结果之间存在的差距。在一般的处理方式中，你将数据分析的代码放在一个文件中，将其生成的输出结果放在另一个文件中，将论文的文本放在第三个文件中。进行分析的过程中，你收集数据分析的输出结果并将其复制过来粘贴到论文中，通常还需要手动重新格式化，这些步骤的每一步都增加了出错的几率，特别是表格，很容易从生成它的步骤中分离开。几乎所有撰写量化分析论文的人都面临着阅读包含结果或数字的稿件问题，这些结果或数据需要重新审查或复制（比如同行评审），但缺乏一些有关数据生成过程的信息。")]),t._v(" "),r("p",[t._v("即使你一直在努力工作，学术论文也需要相当长的时间才能完成写作、评审、修订和出版的周期。为了回答包括评审者在内的各种问题，有时候你必须去回顾自己两年前做过的工作，这并不罕见，你当然不希望从头开始做所有事情以获得正确的答案。我这样说并不夸张，不要说在重复别人的定量分析结果时遇到的困难，在相当短的时间内，就算作者自己，都很难复现自己以前的工作。计算机科学家对衰减的不可避免的过程有一个颇为艺术的称呼，仅仅因为它在硬盘上被单独放置了六个月或更长时间就可以取代项目：位腐烂（bit–rot）。")]),t._v(" "),r("h2",{attrs:{id:"使用-rmarkdown-和-knitr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-rmarkdown-和-knitr"}},[t._v("#")]),t._v(" 使用 RMarkdown 和 "),r("code",[t._v("knitr")])]),t._v(" "),r("p",[t._v("弥补上述写作过程中各个部分割裂的一个重要方法，就是使用 "),r("a",{attrs:{href:"https://rmarkdown.rstudio.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("RMarkdown"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://yihui.name/knitr/",target:"_blank",rel:"noopener noreferrer"}},[t._v("knitr"),r("OutboundLink")],1),t._v(" 在 R 中进行定量分析。我们前面已经提到了如何用 Markdown 这种轻量级格式写纯文本文档，而 RMarkdown 允许你将代码合并到这一过程中，旨在集成纯文本文档的写作和数据分析的执行。你可以像平常一样写论文（或者更常见的是记录数据分析的报告），写下将产生你想要的输出结果的 R 代码，每当你编译这个文档，最终结果是生成的表格或图片，而不是从其他地方粘贴过来的图表。这些代码块可以分布在文档的各个部分，通过块的开头和结尾处的特殊分隔符 "),r("code",[t._v("```")]),t._v(" 与常规文本区分开来。")]),t._v(" "),r("p",[t._v("当准备就绪，「你 "),r("code",[t._v("knit")]),t._v(" 文件」（谢益辉，2015）。也就是说，将 "),r("code",[t._v(".Rmd")]),t._v(" 文件提供给处理代码块的 R，并生成一个新的 "),r("code",[t._v(".md")]),t._v(" 文件，其中的代码块已经被替换为 R 的运算输出结果，然后，再将该 Markdown 文件转换为 PDF 或 HTML 文件，同时，R 中的 "),r("a",{attrs:{href:"https://blog.rstudio.com/2014/06/18/r-markdown-v2/",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("rmarkdown")]),t._v(" 包"),r("OutboundLink")],1),t._v(" 提供了一个 "),r("code",[t._v("render()")]),t._v(" 函数，只需简单的一步就可以将 "),r("code",[t._v(".Rmd")]),t._v(" 转换为 HTML 或 PDF，这就是 RStudio 用于生成文档所做的工作。相反，如果你只想从文本中提取编写的代码，那么你就「tangle」该文件，输出 "),r("code",[t._v(".R")]),t._v(" 文件，这在实践中非常简单。这种方法的优势在于可以更加轻松地正确记录你的工作，数据分析和写作在同一个文件中，数据分析的输出是即时动态的，并且输出结果的代码嵌入在论文中。如果你需要对不同的数据进行很多个但相同（或非常相似）的分析，RMarkdown 和 "),r("code",[t._v("knitr")]),t._v(" 可以更轻松地生成风格一致且准确无误的分析报告。")]),t._v(" "),r("p",[t._v("RMarkdown 是几种 「"),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E6%96%87%E5%AD%A6%E7%BC%96%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("文学编程"),r("OutboundLink")],1),t._v("」格式之一，这种思想最早由计算机科学的先驱理论家 "),r("a",{attrs:{href:"https://www-cs-faculty.stanford.edu/~knuth/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Donald Knuth"),r("OutboundLink")],1),t._v(" 提出，他在业余时间开发了 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.488ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"4.294ex",height:"2.033ex",viewBox:"0 -683 1898 898.5"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"TeXAtom"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"54",d:"M36 443Q37 448 46 558T55 671V677H666V671Q667 666 676 556T685 443V437H645V443Q645 445 642 478T631 544T610 593Q593 614 555 625Q534 630 478 630H451H443Q417 630 414 618Q413 616 413 339V63Q420 53 439 50T528 46H558V0H545L361 3Q186 1 177 0H164V46H194Q264 46 283 49T309 63V339V550Q309 620 304 625T271 630H244H224Q154 630 119 601Q101 585 93 554T81 486T76 443V437H36V443Z"}})]),r("g",{attrs:{"data-mml-node":"mspace",transform:"translate(722, 0)"}}),r("g",{attrs:{"data-mml-node":"mpadded",transform:"translate(582, 0)"}},[r("g",{attrs:{transform:"translate(0, -215.5)"}},[r("g",{attrs:{"data-mml-node":"TeXAtom"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"45",d:"M128 619Q121 626 117 628T101 631T58 634H25V680H597V676Q599 670 611 560T625 444V440H585V444Q584 447 582 465Q578 500 570 526T553 571T528 601T498 619T457 629T411 633T353 634Q266 634 251 633T233 622Q233 622 233 621Q232 619 232 497V376H286Q359 378 377 385Q413 401 416 469Q416 471 416 473V493H456V213H416V233Q415 268 408 288T383 317T349 328T297 330Q290 330 286 330H232V196V114Q232 57 237 52Q243 47 289 47H340H391Q428 47 452 50T505 62T552 92T584 146Q594 172 599 200T607 247T612 270V273H652V270Q651 267 632 137T610 3V0H25V46H58Q100 47 109 49T128 61V619Z"}})])])])]),r("g",{attrs:{"data-mml-node":"mspace",transform:"translate(1263, 0)"}}),r("g",{attrs:{"data-mml-node":"mi",transform:"translate(1148, 0)"}},[r("path",{attrs:{"data-c":"58",d:"M270 0Q252 3 141 3Q46 3 31 0H23V46H40Q129 50 161 88Q165 94 244 216T324 339Q324 341 235 480T143 622Q133 631 119 634T57 637H37V683H46Q64 680 172 680Q297 680 318 683H329V637H324Q307 637 286 632T263 621Q263 618 322 525T384 431Q385 431 437 511T489 593Q490 595 490 599Q490 611 477 622T436 637H428V683H437Q455 680 566 680Q661 680 676 683H684V637H667Q585 634 551 599Q548 596 478 491Q412 388 412 387Q412 385 514 225T620 62Q628 53 642 50T695 46H726V0H717Q699 3 591 3Q466 3 445 0H434V46H440Q454 46 476 51T499 64Q499 67 463 124T390 238L353 295L350 292Q348 290 343 283T331 265T312 236T286 195Q219 88 218 84Q218 70 234 59T272 46H280V0H270Z"}})]),r("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(1898, 0)"}})])])])])]),t._v(" 排版系统，虽然他主要关注记录计算机程序，但现在看来，Knuth 预测了许多重要思想，并且开发了几种基础性工具，用于可重复的数据分析。")],1),t._v(" "),r("p",[t._v("例如，下方的图片，是本文中包含在 "),r("code",[t._v(".Rmd")]),t._v(" 中的源代码块动态生成的。有时我们只想显示代码产生的结果，那么在这种情况下，只输出下方的图片就可以了。但有的时候，我们也希望只显示源代码，那么就是下面这样的代码块。")]),t._v(" "),r("div",{staticClass:"language-R line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-r"}},[r("code",[t._v("library"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ggplot2"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntea "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" rnorm"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbiscuits "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" tea "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rnorm"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.3")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndata "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" data.frame"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tea"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" biscuits"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\np "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" ggplot"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" aes"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tea"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" biscuits"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    geom_point"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    geom_smooth"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lm"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    labs"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tea"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Biscuits"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" theme_bw"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nprint"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br"),r("span",{staticClass:"line-number"},[t._v("9")]),r("br")])]),r("p",[r("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/TomBener/image-hosting/images/example-figure-r-1.png",alt:"example-figure-r-1"}}),t._v(" "),r("small",[r("center",[r("span",{staticStyle:{color:"gray"}},[t._v("R 代码生成的图片")])])],1)]),t._v(" "),r("p",[r("code",[t._v("knitr")]),t._v(" 包和 RMarkdown 可以很方便地输出为 HTML，这使得编辑时易于移植、转换和快速预览。你可以在任何文本编辑器中使用 RMarkdown 文件，并且 Emacs 对其有着很好的支持。RStudio 也原生支持 "),r("code",[t._v(".Rmd")]),t._v(" 文件，可以非常简便地输出为 HTML 和 PDF，并通过其 "),r("a",{attrs:{href:"http://rpubs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("RPubs"),r("OutboundLink")],1),t._v(" 服务将你的成果发布到网络上。"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn1",id:"fnref1"}},[t._v("[1]")])]),t._v(" 同时，"),r("a",{attrs:{href:"https://yihui.name/knitr/",target:"_blank",rel:"noopener noreferrer"}},[t._v("knitr 网站"),r("OutboundLink")],1),t._v(" 有 "),r("a",{attrs:{href:"http://yihui.name/knitr/demo/minimal/",target:"_blank",rel:"noopener noreferrer"}},[t._v("大量的例子"),r("OutboundLink")],1),t._v(" 展示 "),r("code",[t._v("knitr")]),t._v(" 是如何工作的，包括从 "),r("a",{attrs:{href:"https://raw.githubusercontent.com/yihui/knitr-examples/master/001-minimal.Rmd",target:"_blank",rel:"noopener noreferrer"}},[t._v("基本的设置"),r("OutboundLink")],1),t._v(" 到 "),r("a",{attrs:{href:"https://yihui.name/knitr/demo/showcase/",target:"_blank",rel:"noopener noreferrer"}},[t._v("更高级的示例"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("p",[t._v("文学编程有其局限性。对于大型而复杂的分析报告来说，通过多个 "),r("code",[t._v(".Rmd")]),t._v(" 文件生成最终结果，而不是在一个 "),r("code",[t._v(".Rmd")]),t._v(" 文件中一次性生成最终结果，往往更加合理。这就是使用某种版本控制来管理项目仍然很重要的原因之一，因此，你可以根据需要跟踪你的工作文件，但这可能不太适合单个 "),r("code",[t._v(".Rmd")]),t._v(" 文档。")]),t._v(" "),r("hr",{staticClass:"footnotes-sep"}),t._v(" "),r("section",{staticClass:"footnotes"},[r("ol",{staticClass:"footnotes-list"},[r("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[r("p",[t._v("RStudio 的 RMarkdown 支持使用这里提到的所有工具，例如 knitr、Pandoc 等。 用 RStudio 写 RMarkdown 文档是使用纯文本和 R 整理论文和报告的最简单方法。 "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);