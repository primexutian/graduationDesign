import Vue from 'vue'
let vm = new Vue()
const baseUrl = 'http://localhost:8080';//请求服务器公共地址
// const http = (options) => {
//   return new Promise((resolve, reject) => {
//     uni.showLoading({
//       title: '加载中...',
//       mask: options.load || false // 默认遮罩出现可继续操作
//     });
//     try{
//       uni.request({
//         url: (options.baseURL || baseURL) + options.url,
//         method: options.method || 'POST', // 默认为POST请求
//         data: options.data, //请求超时在manifest.json配置
//         sslVerify:false,
//         header: options.method == 'POST' ? {
//           'X-Requested-With': 'XMLHttpRequest',
//           'Content-Type': 'application/json; charset=UTF-8',
//         } : {
//           'X-Requested-With': 'XMLHttpRequest',
//           "Accept": "application/json",
//           "Content-Type": "application/json; charset=UTF-8",
//         },
//         success: res => {
//           resolve(res.data);
//         },
//         fail: (err) => {
//           reject(err);
//           console.log(err);
//
//           uni.showToast({
//             title: '请检查网络连接',
//             icon: 'none'
//           })
//           /*错误码处理
//           let code = err.data.code;
//           switch (code) {
//               case 500:
//                   break;
//               default:
//                   break;
//           } */
//         },
//         complete: () => {
//           uni.hideLoading();
//         }
//       });
//     }catch(e){
//       uni.hideLoading();
//       uni.showToast({
//         title: '服务端异常',
//         icon: 'none'
//       })
//     }
//
//   })
// }

const http = {
  get(url, data) {
    return new Promise((resolve, reject) => {
      uni.request({
        data,
        url: baseUrl + url,
        method: 'get',
        header: {},
        withCredentials: true,
        success: (data) => {
          //做响应拦截
          resolve(data)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  },

  post(url, data) {
    return new Promise((resolve, reject) => {
      uni.request({
        data,
        url: baseUrl + url,
        method: 'post',
        header: {},
        withCredentials: true,
        success: (data) => {
          //做响应拦截
          resolve(data)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  },
  http({
         url,
         method,
         data
       }) {
    if (method === 'get') {
      this.get(url, data)
    } else {
      this.post(url, data)
    }
  }
}
export default http