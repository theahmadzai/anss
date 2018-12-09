<footer class="footer">
    <div class="footer__left">
        <div class="column">
            <h2 class="column__head">About ANSS</h2>
            <div class="column__body">
                <p>ANSS Foundation established by a team of professional Afghans in Toronto, Canada and is a non-political, non-profit and an impartial organization, established in 2017.</p>
            </div>
        </div>
    </div>

    <div class="footer__right">
        <div class="column">
            <h2 class="column__head">Subscribe to Updates & Newsletter</h2>
            <div class="column__body">
                <form method="POST" action="/subscribe">
                    @csrf
                    <input name="name" type="text" placeholder="Full Name" value="{{ old('name')}}" class="@if($errors->has('name')) has-error @endif">
                    <input name="email" type="email" placeholder="Email Address" value="{{ old('email')}}" class="@if($errors->has('email')) has-error @endif">
                    <button>Subscribe</button>
                </form>
            </div>
        </div>

        <div class="column">
            <h2 class="column__head">Social Links</h2>
            <div class="column__body">
                <div class="sm-icons">
                    <a href="https://twitter.com/AnssFoundation" target="blank"><i class="icon icon-twitter"></i></a>
                    <a href="https://www.facebook.com/ANSSFoundation/" target="blank"><i class="icon icon-facebook"></i></a>
                    <a href="https://www.instagram.com/anss_foundation/" target="blank"><i class="icon icon-instagram"></i></a>
                    <a href="#" target="blank"><i class="icon icon-youtube"></i></a>
                    <a href="#" target="blank"><i class="icon icon-flickr"></i></a>
                    <a href="#" target="blank"><i class="icon icon-google-plus"></i></a>
                </div>
            </div>
        </div>
    </div>

</footer>

<div class="copyrights">
    <p>© <span>Copyright</span> 2018 by <span>ANSS Foundation</span>. All Rights Reserved. <span>Privacy and Disclaimer</span></p>
</div>
