var isAnswerShown = false;

function toggleAnswer(element) {
  var qRt = element; // 获取点击的元素
  var qRtInfo = qRt.querySelector('.q-rtinfo'); // 获取 q-rtinfo 元素
  var qRbInfo = qRt.querySelector('.q-rbinfo'); // 获取 q-rbinfo 元素

  // 如果已经显示了答案，则切换回默认状态
  if (isAnswerShown) {
    qRt.style.backgroundColor = '#fff'; // 恢复默认背景颜色
    qRtInfo.textContent = qRtInfo.dataset.defaultText; // 恢复默认文本
    qRtInfo.style.color = '#000'; // 恢复默认文本颜色
    qRbInfo.textContent = '+'; // 恢复默认内容
    qRbInfo.style.color = '#d8d8d8'; // 恢复默认按钮文本颜色
    isAnswerShown = false; // 标记答案未显示
  } else {
    qRt.style.backgroundColor = 'orange'; // 改变背景颜色为橙色
    qRtInfo.textContent = 'answer'; // 更改文本为 "answer"
    qRtInfo.style.color = '#fff'; // 改变文本颜色为白色
    qRbInfo.textContent = '-'; // 更改按钮文本为 "-"
    qRbInfo.style.color = '#fff'; // 改变按钮文本颜色为白色
    isAnswerShown = true; // 标记答案已显示
  }

}

