# Generated by Django 5.1.4 on 2024-12-24 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_profile_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='highschool',
            name='departments',
            field=models.ManyToManyField(blank=True, to='api.department'),
        ),
        migrations.AlterField(
            model_name='highschool',
            name='faculties',
            field=models.ManyToManyField(blank=True, to='api.faculty'),
        ),
        migrations.AlterField(
            model_name='highschool',
            name='specializations',
            field=models.ManyToManyField(blank=True, to='api.specialization'),
        ),
    ]