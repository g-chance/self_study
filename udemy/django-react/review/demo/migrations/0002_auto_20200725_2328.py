# Generated by Django 3.0.8 on 2020-07-25 23:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('demo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='title',
            field=models.CharField(choices=[(0, 'Unknown'), (1, 'processed'), (2, 'paid')], max_length=36, unique=True),
        ),
    ]