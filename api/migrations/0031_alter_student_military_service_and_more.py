# Generated by Django 5.1.4 on 2025-03-26 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0030_alter_annualupdatereport_updated_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='military_service',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='student',
            name='passport',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='student',
            name='phone_number',
            field=models.CharField(max_length=100),
        ),
    ]
