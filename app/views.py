from django.shortcuts import render
from .models import *
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Applicant, Experience



# Create your views here.
def create_applicant(request):

    return render(request, "Index.html")






@csrf_exempt  # Use csrf_exempt for simplicity in this example; in a real application, handle CSRF properly.
def emplyee_create(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))

            # Create an Applicant object
            applicant_data = data['applicant']
            applicant = Applicant.objects.create(
                ApplicantName=applicant_data['ApplicantName'],
                Gender=applicant_data['Gender'],
                age=applicant_data['age'],
                Qlification=applicant_data['Qlification'],
                TotalExpericesyear=applicant_data['TotalExpericesyear']
            )

            # Create Experience objects for each entry
            experience_data = data['experiences']
            for experience_entry in experience_data:
                Experience.objects.create(
                    applicant=applicant,
                    Companyname=experience_entry['Companyname'],
                    Desgination=experience_entry['Desgination'],
                    WorkYear=experience_entry['WorkYear']
                )

            return JsonResponse({"message": "Data saved successfully"}, status=200)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=405)
