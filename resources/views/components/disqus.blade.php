<div id="disqus_thread"></div>

@push('scripts')
<script>
var disqus_config = function () {
    this.page.url = '{{ Request::url() }}';
    this.page.identifier = {{ $article->id }};
};

(function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://anss.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
</script>
@endpush
