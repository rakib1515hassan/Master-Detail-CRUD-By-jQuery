# Generated by Django 4.2.6 on 2023-10-07 19:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Applicant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(help_text='Enter Applicant Name', max_length=50)),
                ('Gender', models.CharField(help_text='Enter Gender ', max_length=10)),
                ('age', models.IntegerField(default=1)),
                ('Qlification', models.CharField(help_text='Enter your Qlifications', max_length=50)),
                ('TotalExpericesyear', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Companyname', models.CharField(help_text='Enter Company name ', max_length=5)),
                ('Desgination', models.CharField(help_text='Enter Desgination', max_length=50)),
                ('WorkYear', models.PositiveIntegerField(default=1)),
                ('applicantId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.applicant')),
            ],
        ),
    ]
