Page({
  data: {
    guideContent: `劳动者企业背景调查优化指南

本指南为劳动者提供实用步骤，通过可访问的在线工具和平台调查潜在用人单位，帮助做出明智的就业决策。

📱 1. 使用手机应用查询基本企业信息
劳动者可通过主流企业信息查询应用获取基本信息。这些应用通常提供免费基础查询功能。输入用人单位全称，进入企业主页。

🏛️ 2. 通过国家企业信用信息公示系统查询
访问国家企业信用信息公示系统官网，注册有效邮箱，搜索用人单位主页，下载详细报告至邮箱供参考。

⚖️ 3. 通过中国裁判文书网查询法律案件
使用微信登录裁判文书网，输入用人单位全称搜索。通过关键词查找过往劳动争议或其他诉讼案件，了解潜在风险。

📋 4. 通过信用中国查询信用信息
在微信搜索信用信息查询公众号或访问官网，搜索用人单位并下载信用报告。

🏢 5. 验证民办非企业单位
使用微信小程序"国家社会组织法人库"确认其合法注册状态。

💾 6. 从应用中保存企业信息
在企业信息查询应用中，点击右上角"..."图标，在"更多功能"中选择"生成长图"，保存至手机相册。

⚠️ 7. 查询诉讼与债务情况
查看法院公开信息，了解用人单位是否涉及诉讼或未清债务。存在未偿债务的单位可能影响薪资保障。

🛡️ 8. 查看过往社保缴纳情况
在应用中找到"基本信息"中的"企业年报"，查看社保缴纳情况。注意：年报反映历史数据，仅供参考。

📄 9. 核查劳务派遣资质
在企业经营信息中查看"行政许可"，确认是否持有有效劳务派遣许可证。

📑 10. 获取法律诉讼证据
从国家企业信用信息公示系统下载的企业报告可用作仲裁或诉讼中的证据材料。

📊 11. 查询行政处罚记录
访问当地市场监督管理局或城管局等官网，查看过往行政处罚公示信息。

🔍 12. 检索劳动争议案件
在中国裁判文书网上，搜索用人单位全称并筛选劳动争议案件，了解过往劳动纠纷历史。

通过以上步骤，劳动者可收集潜在用人单位的关键信息，做出明智的就业选择。`
  },

  // 复制完整指南
  copyGuide: function() {
    wx.setClipboardData({
      data: this.data.guideContent,
      success: (res) => {
        wx.showToast({
          title: '已复制到剪贴板',
          icon: 'success',
          duration: 2000
        });
      },
      fail: (err) => {
        console.error('复制失败', err);
        wx.showToast({
          title: '复制失败',
          icon: 'error'
        });
      }
    });
  },

  // 复制链接
  copyLink: function(e) {
    const link = e.currentTarget.dataset.link;
    if (link) {
      wx.setClipboardData({
        data: link,
        success: (res) => {
          wx.showToast({
            title: '链接已复制',
            icon: 'success',
            duration: 1500
          });
        },
        fail: (err) => {
          console.error('复制链接失败', err);
          wx.showToast({
            title: '复制失败',
            icon: 'error'
          });
        }
      });
    }
  },

  // 分享指南
  shareGuide: function() {
    // 触发系统分享
    if (wx.shareAppMessage) {
      wx.shareAppMessage({
        title: '企业背景调查指南 - 求职必备技能',
        path: '/pages/background-check-guide/background-check-guide',
        success: (res) => {
          wx.showToast({
            title: '分享成功',
            icon: 'success'
          });
        },
        fail: (err) => {
          wx.showToast({
            title: '分享取消',
            icon: 'none'
          });
        }
      });
    } else {
      wx.showToast({
        title: '请使用右上角菜单分享',
        icon: 'none'
      });
    }
  },

  // 分享功能
  onShareAppMessage: function () {
    return {
      title: '企业背景调查指南 - 求职前必看的12个调查步骤！',
      path: '/pages/background-check-guide/background-check-guide',
      success: (res) => {
        console.log('分享成功', res);
        wx.showToast({
          title: '分享成功',
          icon: 'success'
        });
      },
      fail: (err) => {
        console.error('分享失败', err);
        wx.showToast({
          title: '分享取消',
          icon: 'none'
        });
      }
    };
  }
})
