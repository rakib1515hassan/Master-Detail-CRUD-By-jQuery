from django.urls import path
from .views import *

urlpatterns = [
    path("",create_applicant,name="create_applicant"),
    path("emplyee-create/",emplyee_create,name="emplyee_create"),
    
]
