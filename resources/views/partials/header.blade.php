<header class="header">
    <div class="header__left">
        <a href="/" class="logo">
            <img src="{{ asset('img/SmallLogo.png') }}" alt="Afghan Network for Social Services">
        </a>
    </div>

    <div class="header__right">
        <div class="top-links">
            <div class="top-links__main">
                <a href="#" class="sm" style="color:black;"><i class="icon icon-twitter"></i></a>
                <a href="#" class="sm" style="color:red;"><i class="icon icon-facebook"></i></a>
                <a href="#" class="sm" style="color:green;"><i class="icon icon-instagram"></i></a>
                <a href="/contact">Contact Us</a>
                <a href="#">FAQ</a>

                @guest
                <a href="/login">Login</a>
                @else
                <a href="/user"><i class="icon icon-user"></i> Profile</a>
                    @if (Auth::user()->role == 3)
                    <a href="/admin"><i class="icon icon-terminal"></i> Admin</a>
                    @endif
                    <form method="POST" action="/logout" style="display:inline;">
                        @csrf
                        <a href="#" onclick="this.parentElement.submit();"><i class="icon icon-switch"></i> Logout</a>
                    </form>
                @endguest
            </div>
        </div>

        <div class="top-search">
            <form action="" class="top-search__main">
                <input type="search">
                <button>Search</button>
            </form>
        </div>
    </div>
</header>
