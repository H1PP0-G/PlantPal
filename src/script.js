// 当整个页面加载完毕后执行
document.addEventListener('DOMContentLoaded', () => {

    // 1. 模拟从数据库获取的植物数据
    const plantData = {
        name: "Jade Plant",
        species: "Crassula ovata",
        // 让初始日期更接近现在，方便测试
        lastWatered: "2025-09-25T10:00:00Z", 
        sunlightHoursToday: 6,
        wateringIntervalDays: 7,
        minSunlightHours: 5
    };

    // 2. 获取HTML中需要操作的元素
    const waterStatusEl = document.getElementById('water-status');
    const sunlightStatusEl = document.getElementById('sunlight-status');
    const lastWateredDateEl = document.getElementById('last-watered-date');
    const sunlightHoursEl = document.getElementById('sunlight-hours');
    const logWaterBtn = document.getElementById('log-water-btn');
    const logSunlightBtn = document.getElementById('log-sunlight-btn');

    // 3. 核心逻辑函数：更新植物状态 (没有变化)
    function updatePlantStatus() {
        const lastWateredDate = new Date(plantData.lastWatered);
        const today = new Date();
        const daysSinceWatered = (today - lastWateredDate) / (1000 * 60 * 60 * 24);

        waterStatusEl.className = 'status-indicator'; 
        if (daysSinceWatered > plantData.wateringIntervalDays + 2) {
            waterStatusEl.textContent = 'Urgent!';
            waterStatusEl.classList.add('status-urgent');
        } else if (daysSinceWatered >= plantData.wateringIntervalDays) {
            waterStatusEl.textContent = 'Needs Water';
            waterStatusEl.classList.add('status-attention');
        } else {
            waterStatusEl.textContent = 'Good';
            waterStatusEl.classList.add('status-good');
        }

        sunlightStatusEl.className = 'status-indicator';
        if (plantData.sunlightHoursToday < plantData.minSunlightHours) {
            sunlightStatusEl.textContent = 'Needs Sun';
            sunlightStatusEl.classList.add('status-attention');
        } else {
            sunlightStatusEl.textContent = 'Good';
            sunlightStatusEl.classList.add('status-good');
        }

        lastWateredDateEl.textContent = lastWateredDate.toLocaleDateString();
        sunlightHoursEl.textContent = `${plantData.sunlightHoursToday} hours`;
    }

    // 4. 为按钮添加【真正】的事件监听器 (这是关键修改！)
    logWaterBtn.addEventListener('click', () => {
        // 更新数据：将上次浇水日期设置为“现在”
        plantData.lastWatered = new Date().toISOString(); 
        
        console.log("Watering logged. New date:", plantData.lastWatered); // 在控制台输出日志，方便调试

        // 重新渲染UI：再次调用状态更新函数，让界面刷新！
        updatePlantStatus();
    });

    logSunlightBtn.addEventListener('click', () => {
        // 更新数据：将光照时长加1
        plantData.sunlightHoursToday += 1;
        
        console.log("Sunlight added. New hours:", plantData.sunlightHoursToday);

        // 重新渲染UI
        updatePlantStatus();
    });

    // 5. 页面首次加载时，立即执行一次状态更新
    updatePlantStatus();
});