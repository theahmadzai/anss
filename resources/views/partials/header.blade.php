<div id="top-line"></div>

<header class="header">
    <a href="/" class="logo">
        <img src="{{ asset('img/logo1.png') }}" alt="Afghan Network for Social Services" width="100" height="100">
    </a>

    <div style="padding:0 2rem; font-size:0.7rem; font-weight:bold;">
        <div>
            <a href="#" style="color:black;"><span class="icon icon-twitter"></span></a>
            <a href="#" style="color:red;"><span class="icon icon-facebook"></span></a>
            <a href="#" style="color:green;"><span class="icon icon-instagram"></span></a> |
            <a href="/">Home</a> |
            <a href="/contact">Contact Us</a> |
            <a href="#">FAQ</a> |

            @guest
                <a href="/login">Login</a>
            @else
                <a href="/user"><i class="icon icon-user"></i> Profile</a> |
                @if (Auth::user()->role == 3)
                    <a href="/admin"><i class="icon icon-terminal"></i> Admin</a> |
                @endif
                <form method="POST" action="/logout" style="display:inline;">
                    @csrf
                    <a href="#" onclick="this.parentElement.submit();"><i class="icon icon-switch"></i> Logout</a>
                </form>
            @endguest

        </div>
        <input type="text" style="padding:0.2rem; margin:0.5rem 0; width:200px; box-shadow:none;">
        <div>
            <a href="#">Manage your account</a> |
            <a href="#">Advance search</a>
        </div>
    </div>
</header>
