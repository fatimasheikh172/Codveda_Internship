from django.shortcuts import render , HttpResponse , redirect
from .models import Blogs, Category , Comment
from django.shortcuts import get_object_or_404
from django.http import HttpResponseRedirect

def posts_by_category(request, category_id):
   # fetch posts by category_id
   posts = Blogs.objects.filter(status='published', category = category_id)
   try:
       category = Category.objects.get(pk=category_id)
   except:
       return redirect('home')

   
   category = Category.objects.get(pk=category_id)
   context = {
       'posts': posts,
        'category': category,  
   }
   return render(request, 'posts_by_category.html', context)

def blogs(request , slug):
    single_post = get_object_or_404(Blogs, slug=slug , status='published')
    if request.method == 'POST':
        comment = Comment()
        comment.user = request.user
        comment.blog = single_post
        comment.comment = request.POST.get('comment')
        comment.save()
        return HttpResponseRedirect(request.path_info)
    comments = Comment.objects.filter(blog=single_post)
    context = {
        'single_post': single_post,
        'comments': comments,
    }
    return render(request, 'blogs.html' , context)
