from django.db import models

# Create your models here.
class Applicant(models.Model):
    ApplicantName=models.CharField(max_length=50,help_text="Enter Applicant Name")
    Gender=models.CharField(max_length=10, help_text="Enter Gender ")
    age = models.IntegerField(default=1)
    Qlification=models.CharField(max_length=50, help_text="Enter your Qlifications")
    TotalExpericesyear=models.IntegerField(default=1)

    def __str__(self):
        return  self.ApplicantName


class Experience(models.Model):
   applicant = models.ForeignKey(Applicant, on_delete=models.CASCADE)
   Companyname=models.CharField(max_length=5, help_text="Enter Company name ")
   Desgination=models.CharField(max_length=50, help_text="Enter Desgination")
   WorkYear=models.PositiveIntegerField(default=1)

   def __str__(self):
       return self.Companyname

