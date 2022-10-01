document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-765f783546ef.css">')
document.write('<div id=\"gist104974707\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-forecast_function-py\" class=\"file my-2\">\n    \n    <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python  \">\n\n        \n<div class=\"js-check-bidi js-blob-code-container blob-code-content\">\n\n  <template class=\"js-file-alert-template\">\n  <div data-view-component=\"true\" class=\"flash flash-warn flash-full d-flex flex-items-center\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n  \n    <span>\n      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.\n      <a href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n    <\/span>\n\n\n  <div data-view-component=\"true\" class=\"flash-action\">        <a href=\"{{ revealButtonHref }}\" data-view-component=\"true\" class=\"btn-sm btn\">    Show hidden characters\n<\/a>\n<\/div>\n<\/div><\/template>\n<template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table data-hpc class=\"highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file\" data-tab-size=\"8\" data-paste-markdown-skip data-tagsearch-lang=\"Python\" data-tagsearch-path=\"forecast_function.py\">\n        <tr>\n          <td id=\"file-forecast_function-py-L1\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"1\"><\/td>\n          <td id=\"file-forecast_function-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c># Sum of the forecast sales of the next n days<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-forecast_function-py-L2\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"2\"><\/td>\n          <td id=\"file-forecast_function-py-LC2\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>def<\/span> <span class=pl-en>forecastxgb_sum_n<\/span>(<span class=pl-s1>df_fcst<\/span>, <span class=pl-s1>n_window<\/span>, <span class=pl-s1>rolling_ndays<\/span>):<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-forecast_function-py-L3\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"3\"><\/td>\n          <td id=\"file-forecast_function-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>df_ft3n<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>df_fcst<\/span>.<span class=pl-en>rolling<\/span>(<span class=pl-s1>window<\/span><span class=pl-c1>=<\/span><span class=pl-s1>n_window<\/span>).<span class=pl-en>sum<\/span>().<span class=pl-en>shift<\/span>(<span class=pl-c1>-<\/span><span class=pl-c1>2<\/span>)<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-forecast_function-py-L4\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"4\"><\/td>\n          <td id=\"file-forecast_function-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>df_ft3n<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>df_ft3n<\/span>.<span class=pl-s1>iloc<\/span>[<span class=pl-s1>rolling_ndays<\/span><span class=pl-c1>-<\/span><span class=pl-c1>1<\/span>:]<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-forecast_function-py-L5\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"5\"><\/td>\n          <td id=\"file-forecast_function-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-forecast_function-py-L6\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"6\"><\/td>\n          <td id=\"file-forecast_function-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>return<\/span> <span class=pl-s1>df_ft3n<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-forecast_function-py-L7\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"7\"><\/td>\n          <td id=\"file-forecast_function-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-forecast_function-py-L8\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"8\"><\/td>\n          <td id=\"file-forecast_function-py-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c># p * day n sales applied for the sales of the next n days<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-forecast_function-py-L9\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"9\"><\/td>\n          <td id=\"file-forecast_function-py-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>def<\/span> <span class=pl-en>forecastrm_sum_n<\/span>(<span class=pl-s1>df_roll<\/span>, <span class=pl-s1>n_window<\/span>):<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-forecast_function-py-L10\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"10\"><\/td>\n          <td id=\"file-forecast_function-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>return<\/span> <span class=pl-s1>df_roll<\/span> <span class=pl-c1>*<\/span> <span class=pl-s1>n_window<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-forecast_function-py-L11\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"11\"><\/td>\n          <td id=\"file-forecast_function-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-forecast_function-py-L12\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"12\"><\/td>\n          <td id=\"file-forecast_function-py-LC12\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c># Calculate Sum of Actual sales: Day n, Day n+1, Day n+2, Day n + p<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-forecast_function-py-L13\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"13\"><\/td>\n          <td id=\"file-forecast_function-py-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>def<\/span> <span class=pl-en>actual_sum_p<\/span>(<span class=pl-s1>df_sales<\/span>, <span class=pl-s1>days_p<\/span>):<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-forecast_function-py-L14\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"14\"><\/td>\n          <td id=\"file-forecast_function-py-LC14\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-s1>df_act_p<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>df_sales<\/span>.<span class=pl-en>rolling<\/span>(<span class=pl-s1>window<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>days_p<\/span>).<span class=pl-en>sum<\/span>().<span class=pl-en>shift<\/span>(<span class=pl-c1>-<\/span>(<span class=pl-s1>days_p<\/span><span class=pl-c1>-<\/span><span class=pl-c1>1<\/span>))<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-forecast_function-py-L15\" class=\"blob-num js-line-number js-code-nav-line-number js-blob-rnum\" data-line-number=\"15\"><\/td>\n          <td id=\"file-forecast_function-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>return<\/span> <span class=pl-s1>df_act_p<\/span><\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n    <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/samirovic/87142b22102f19163085e2498d48e210/raw/bd339af0130c98a78122ac883176716c57724966/forecast_function.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/samirovic/87142b22102f19163085e2498d48e210#file-forecast_function-py\">\n          forecast_function.py\n        <\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
