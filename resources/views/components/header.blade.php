<header class="header">
    <div class="header__left">
        <a href="/" class="logo">
            <img src="{{ asset('img/SmallLogo.png') }}" alt="Afghan Network for Social Services">
        </a>
    </div>

    <div class="header__right">
        <div class="top-links">
            <div class="top-links__main">
                <a href="https://twitter.com/AnssFoundation" target="blank" class="sm" style="color:black;"><i class="icon icon-twitter"></i></a>
                <a href="https://www.facebook.com/ANSSFoundation/" target="blank" class="sm" style="color:red;"><i class="icon icon-facebook"></i></a>
                <a href="https://www.instagram.com/anss_foundation/" target="blank" class="sm" style="color:green;"><i class="icon icon-instagram"></i></a>
                <a href="/contact-us">Contact Us</a>
                <a href="/subscribe">Subscribe</a>
                <a href="#">FAQ</a>
                <a href="/webmail" target="blank"><i class="icon icon-envelop"></i> Webmail Login</a>

                @guest
                <a href="/admin/login">Login</a>
                @else
                <a href="/admin">Admin Panel</a>
                @endguest
            </div>
        </div>

        <div class="top-search">
            <form action="#" class="top-search__main">
                <input type="search">
                <button>Search</button>
            </form>
        </div>
    </div>
</header>
