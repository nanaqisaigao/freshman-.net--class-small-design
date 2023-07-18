using Microsoft.AspNetCore.Mvc;

namespace Session权限控制.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View(); // 返回登录界面 (视图代码见下页)
        }

        public IActionResult Check(String username, String pwd)
        {
            // 登录成功
            if (!String.IsNullOrEmpty(username) && username.Equals("zz") && !String.IsNullOrEmpty(pwd) && pwd.Equals("888"))
            {                  //判断字符串不为空                //C#字符串比较用Equals()方法
                HttpContext.Session.SetString("username", username);//将登录的用户名作为登录凭证
                return RedirectToAction("Index", "Test");
                //登录成功后，将请求重定向到Test控制器的Index方法 (成功跳转)
            }
            // 登录失败
            TempData["error"] = "用户名或密码错";//使用TempData来传送登录错误信息
            return RedirectToAction("Index", "Login");
            //将请求重定向到Login控制器的Index动作 (即重新登录)
        }


        // 注销
        [Route("Logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();//清除session信息
            return RedirectToAction("Index", "Home"); //重新定义到网站首页
        }
/* 默认路由                           自定义路由：更简洁
https://localhost:端口号/Login/Logout https://localhost:端口号/Logout*/

    }
}
