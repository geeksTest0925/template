import HeretoTrack from "hereto-track-web/dist/index"
export const trackIns = new HeretoTrack({
    // 监控平台生成的项目ID
    projectId: process.env.VUE_APP_PROJECT_ID * 1,
    // 是否监控api
    isTrackApi: true,
    // 是否监控js、资源加载错误
    isTrackError: true,
    // 是否自动上报pv
    autoPageView: false
})
