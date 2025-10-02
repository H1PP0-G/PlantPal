// 当整个页面加载完毕后执行
document.addEventListener('DOMContentLoaded', () => {

    // 1. 模拟从数据库获取的植物数据
    // 在真实应用中，这些数据会通过API获取
    const plantData = {
        name: "Jade Plant",
        species: "Crassula ovata",
        lastWatered: "2025-09-20T10:00:00Z", // 上次浇水日期 (ISO 格式)
        sunlightHoursToday: 6,
        // --- 养护规则 ---
        wateringIntervalDays: 7, // 每7天浇一次水
        minSunlightHours: 5      // 每天至少需要5小时光照
    };

    // 2. 获取HTML中需要操作的元素
    const waterStatusEl = document.getElementById('water-status');
    const sunlightStatusEl = document.getElementById('sunlight-status');
    const lastWateredDateEl = document.getElementById('last-watered-date');
    const sunlightHoursEl = document.getElementById('sunlight-hours');

    // 3. 核心逻辑函数：更新植物状态
    function updatePlantStatus() {
        // --- 浇水逻辑 ---
        const lastWateredDate = new Date(plantData.lastWatered);
        const today = new Date();
        // 计算上次浇水到现在过去了多少天
        const daysSinceWatered = (today - lastWateredDate) / (1000 * 60 * 60 * 24);

        // 清除旧的样式
        waterStatusEl.className = 'status-indicator'; 

        if (daysSinceWatered > plantData.wateringIntervalDays + 2) {
            waterStatusEl.textContent = 'Urgent!';
            waterStatusEl.classList.add('status-urgent'); // 紧急（红色）
        } else if (daysSinceWatered >= plantData.wateringIntervalDays) {
            waterStatusEl.textContent = 'Needs Water';
            waterStatusEl.classList.add('status-attention'); // 需要注意（橙色）
        } else {
            waterStatusEl.textContent = 'Good';
            waterStatusEl.classList.add('status-good'); // 良好（绿色）
        }

        // --- 阳光逻辑 ---
        sunlightStatusEl.className = 'status-indicator';

        if (plantData.sunlightHoursToday < plantData.minSunlightHours) {
            sunlightStatusEl.textContent = 'Needs Sun';
            sunlightStatusEl.classList.add('status-attention'); // 需要注意（橙色）
        } else {
            sunlightStatusEl.textContent = 'Good';
            sunlightStatusEl.classList.add('status-good'); // 良好（绿色）
        }

        // --- 更新页面显示的文本信息 ---
        lastWateredDateEl.textContent = lastWateredDate.toLocaleDateString();
        sunlightHoursEl.textContent = `${plantData.sunlightHoursToday} hours`;
    }

    // 4. 为按钮添加事件监听器 (暂时用 alert 模拟)
    document.getElementById('log-water-btn').addEventListener('click', () => {
        alert("Watering logged! (This would update the database in a real app)");
        // 在真实应用中，这里会更新 plantData.lastWatered 并重新调用 updatePlantStatus()
    });

    document.getElementById('log-sunlight-btn').addEventListener('click', () => {
        alert("Sunlight logged! (This would update the database in a real app)");
        // 在真实应用中，这里会更新 plantData.sunlightHoursToday 并重新调用 updatePlantStatus()
    });


    // 5. 页面首次加载时，立即执行一次状态更新
    updatePlantStatus();
});