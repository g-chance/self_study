# Generated by Django 3.0.8 on 2020-07-29 01:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=36, unique=True)),
                ('desc', models.TextField(blank=True, max_length=256)),
                ('price', models.IntegerField(default=0)),
                ('published', models.DateTimeField(blank=True, default=None, null=True)),
                ('is_published', models.BooleanField(default=False)),
                ('cover', models.FileField(blank=True, upload_to='covers/')),
            ],
        ),
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='characters', to='demo.Book')),
            ],
        ),
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=30)),
                ('lastName', models.CharField(max_length=30)),
                ('books', models.ManyToManyField(related_name='authors', to='demo.Book')),
            ],
        ),
    ]