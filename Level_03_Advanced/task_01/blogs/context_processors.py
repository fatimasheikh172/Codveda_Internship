from .models import Category

def get_categories(request):
    """
    Context processor to add categories to the context.
    """
    categories = Category.objects.all()
    return dict(categories=categories)