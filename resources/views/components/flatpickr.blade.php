@push('styles')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
@endpush

@push('scripts')
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script>
        $("#datetimepicker").flatpickr({
            enableTime: true,
            dateFormat: 'Y-m-d H:i'
        })
    </script>
@endpush
