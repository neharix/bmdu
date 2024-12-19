# Generated by Django 5.1.4 on 2024-12-19 17:29

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Degree',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='HighSchool',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('abbreviation', models.CharField(max_length=100)),
                ('manager', models.OneToOneField(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('surname', models.CharField(max_length=100)),
                ('patronymic', models.CharField(max_length=100)),
                ('degree', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.degree')),
                ('workplace', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to='api.highschool')),
            ],
        ),
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('abbreviation', models.CharField(max_length=100)),
                ('high_school', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.highschool')),
                ('dean', models.OneToOneField(on_delete=django.db.models.deletion.PROTECT, related_name='faculty_dean', to='api.person')),
                ('deputy_deans', models.ManyToManyField(to='api.person')),
            ],
        ),
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('abbreviation', models.CharField(max_length=100)),
                ('faculty', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.faculty')),
                ('director', models.OneToOneField(on_delete=django.db.models.deletion.PROTECT, to='api.person')),
            ],
        ),
        migrations.CreateModel(
            name='SpecializationSeed',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('abbreviation', models.CharField(max_length=100)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.department')),
            ],
        ),
        migrations.CreateModel(
            name='Specialization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField(default=1)),
                ('index', models.IntegerField(blank=True, null=True)),
                ('curator', models.OneToOneField(on_delete=django.db.models.deletion.PROTECT, to='api.person')),
                ('seed', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='api.specializationseed')),
            ],
        ),
    ]
