using Microsoft.AspNetCore.Mvc;

namespace Session权限控制.Controllers
{
    public class TestController : Controller
    {
        public IActionResult Index()
        {
            string username = HttpContext.Session.GetString("username");//读取登录凭证
            if (!String.IsNullOrEmpty(username))//登陆凭证不为空
            {
                ViewData["Message"] = "欢迎" + username;
                return View();
            }
            else //usename值为空表明没有登录凭证，则重定向到Login的Index去重新登录
            {
                return RedirectToAction("Index", "Login");
            }
        }
    }
}
