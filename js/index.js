
//Navbar
container.innerHTML = `  <nav class="navbar navbar-expand-sm sticky-top navbar-dark bg-dark ">
<div  class="container-fluid">
  <a class="navbar-brand" href="#">
    <h3>
      <em>eCommerce</em>
    </h3>
  </a>
  <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="navbar-collapse collapse" id="navbarSupportedContent">
    <form class="dist d-flex " role="search">  
      <input class="form-control " type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-info" type="submit">Search</button>
    </form>  
    <ul class="navbar-nav">
      <li class="nav-item">
      <a href="/pages/login.html"><button class="btn btn-outline-info" type="submit">Login</button></a>
      </li>
      <li class="nav-item">
      <a href="/pages/Cart.html"><i class="icon fa-solid fa-cart-shopping"></i></a>
      </li>
    </ul>
  </div>
</div>
</nav>
<div class="main">
<ul>
    <a href="/index.html">Home</a>
</ul>
<ul>
  <a href="/pages/Allproducts.html" target="">AllProducts</a>
</ul>
<ul>
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Womens
  </button>
  <ul class="dropdown-menu">
    <li>
      <button class="dropdown-item" type="button" style="margin-left: 8px">
        <a href="/pages/womenAllproduct.html">All Products</a>
      </button>
    </li>
    <li>
      <button class="dropdown-item" type="button" style="margin-left: 8px">
      <a href="/pages/womenDress.html">Dress</a>
      </button>
    </li>
    <li>
      <button class="dropdown-item" type="button" style="margin-left: 8px">
      <a href="/pages/womenPant.html">Pants</a>
      </button>
    </li>
    <li>
      <button class="dropdown-item" type="button" style="margin-left: 8px">
        <a href="/pages/womenskirt.html">Skirts</a>
      </button>
    </li>
  </ul>
</ul>
<ul>
  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Mens
  </button>
  <ul class="dropdown-menu">
    <li>
      <button class="dropdown-item" type="button" style="margin-left: 8px">
      <a href="/pages/mensAllproduct.html">All Products</a>
      </button>
    </li>
    <li>
      <button class="dropdown-item" type="button" style="margin-left: 8px">
      <a href="/pages/mensShirt.html">Shirts</a>
      </button>
    </li>
    <li>
      <button class="dropdown-item" type="button" style="margin-left: 8px">
      <a href="/pages/mensPant.html">Pants</a>
      </button>
    </li>
    <li>
      <button class="dropdown-item" type="button" style="margin-left: 8px">
      <a href="/pages/menHoodie.html">Hoddies</a>
      </button>
    </li>
  </ul>
</ul>
<ul>
<a href="/pages/kides.html">Kids</a></ul>
<ul>
<a href="/pages/contactus.html">Contact Us</a>
</ul>
</div>

`
//Footer
footer.innerHTML = `<footer class="footer">
<div class="container">
  <div class="row">
    <div class="footer-col">
      <h4>mens</h4>
      <ul>
        <li><a href="/pages/Allproducts.html">Allproducts</a></li>
        <li><a href="/pages/mensShirt.html">Shirts</a></li>
        <li><a href="/pages/mensPant.html">pants</a></li>
        <li><a href="/pages/menHoodie.html">hoddies</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Womens</h4>
      <ul>
        <li><a href="/pages/womenAllproduct.html">Allproducts</a></li>
        <li><a href="/pages/womenDress.html">Dress</a></li>
        <li><a href="/pages/womenPant.html">pants</a></li>
        <li><a href="/pages/womenskirt.html">skirt</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>kids</h4>
      
    </div>
    <div class="footer-col">
      <h4>Links</h4>
      <div class="social-links">
        <a href="https://www.facebook.com/profile.php?id=100009676687471" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/sagarkoriii" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/sagar-kori/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
</div>
<hr class="lasthr">
<p class="copyright">Copyright © eCommerce 2022-23</p>
</footer>
`
//Login form
function login(){

  var mail=document.getElementById("eml").value
  var psw=document.getElementById("pswd").value
  if(mail==="admin@admin.com" && psw==="123456"){
    alert("login Successful")
  }
    else{
      alert("Incorrect Id or Password")
  }
  clear();
}

function clear(){
  document.getElementById("eml").value="";
  document.getElementById("pswd").value="";
}