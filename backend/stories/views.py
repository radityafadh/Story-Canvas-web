# stories/views.py

from django.http import HttpResponse

def index(request):
    return HttpResponse("<h1>Selamat Datang di StoryCanvas!</h1><p>Ini adalah halaman pertama kita.</p>")